const axios = require("axios");
const cheerio = require("cheerio");
/**
 * Extract image URL from a product page URL
 * @param {string} productUrl - The URL of the product page
 * @returns {Promise<string|null>} - The extracted image URL or null if not found
 */
async function extractImageFromUrl(productUrl) {
  try {
    if (!productUrl || typeof productUrl !== "string") {
      console.log("[ImageExtractor] No valid product URL provided");
      return null;
    }

    console.log(
      `[ImageExtractor] Attempting to extract image from: ${productUrl}`,
    );

    const response = await axios.get(productUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      timeout: 10000,
    });

    const $ = cheerio.load(response.data);

    // Try multiple strategies to find the product image
    let imageUrl = null;

    // Strategy 1: Look for og:image meta tag (most reliable)
    imageUrl = $('meta[property="og:image"]').attr("content");
    if (imageUrl) {
      console.log("[ImageExtractor] Found image via og:image meta tag");
      return resolveImageUrl(imageUrl, productUrl);
    }

    // Strategy 2: Look for twitter:image meta tag
    imageUrl = $('meta[name="twitter:image"]').attr("content");
    if (imageUrl) {
      console.log("[ImageExtractor] Found image via twitter:image meta tag");
      return resolveImageUrl(imageUrl, productUrl);
    }

    // Strategy 3: Look for schema.org ImageObject
    imageUrl = $('[itemprop="image"]').attr("src") || $('[itemprop="image"]').attr("content");
    if (imageUrl) {
      console.log("[ImageExtractor] Found image via itemprop image");
      return resolveImageUrl(imageUrl, productUrl);
    }

    // Strategy 4: Look for data-main-image or similar data attributes
    imageUrl =
      $("[data-main-image]").attr("src") ||
      $("[data-main-image]").attr("data-src") ||
      $("[data-zoom-image]").attr("src") ||
      $("[data-old-hires]").attr("src");
    if (imageUrl) {
      console.log("[ImageExtractor] Found image via data-main-image attribute");
      return resolveImageUrl(imageUrl, productUrl);
    }

    // Strategy 5: Look for main product image classes/IDs
    const mainImgSelectors = [
      "#landingImage", "#main-image", ".main-image", ".product-image", 
      ".primary-image", ".featured-image", "[class*='product-image']",
      "[id*='product-image']"
    ];
    for (const selector of mainImgSelectors) {
      imageUrl = $(selector).first().attr("src") || $(selector).first().attr("data-src") || $(selector).first().attr("data-lazy-src");
      if (imageUrl) {
        console.log(`[ImageExtractor] Found image via selector: ${selector}`);
        return resolveImageUrl(imageUrl, productUrl);
      }
    }

    // Strategy 6: Get first meaningful image that's likely the product
    const images = $("img");
    for (let i = 0; i < images.length; i++) {
      const img = $(images[i]);
      const src = img.attr("src") || img.attr("data-src") || img.attr("data-lazy-src") || img.attr("srcset")?.split(' ')[0];
      const alt = img.attr("alt") || "";
      const id = img.attr("id") || "";
      const className = img.attr("class") || "";

      if (src && src.startsWith("http")) {
        // Skip logos, icons, etc.
        const isLikelyNotProduct = /logo|icon|tracking|banner|ad|social|pixel/i.test(src) || 
                                   /logo|icon|nav/i.test(className) || 
                                   /logo|icon|nav/i.test(id);
        
        if (!isLikelyNotProduct) {
          // If alt text matches title or name, it's very likely the product
          console.log("[ImageExtractor] Found image via fallback img tag");
          return resolveImageUrl(src, productUrl);
        }
      }
    }

    console.log("[ImageExtractor] Could not extract image from URL");
    return null;
  } catch (error) {
    console.error(`[ImageExtractor] Error extracting image: ${error.message}`);
    return null;
  }
}

/**
 * Resolve relative URLs to absolute URLs
 * @param {string} imageUrl - The image URL (may be relative)
 * @param {string} baseUrl - The base URL to resolve against
 * @returns {string} - The absolute image URL
 */
function resolveImageUrl(imageUrl, baseUrl) {
  if (!imageUrl) return null;

  // If already absolute URL
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  // If protocol-relative
  if (imageUrl.startsWith("//")) {
    return "https:" + imageUrl;
  }

  // If root-relative
  if (imageUrl.startsWith("/")) {
    try {
      const url = new URL(baseUrl);
      return `${url.protocol}//${url.host}${imageUrl}`;
    } catch {
      return null;
    }
  }

  // If relative path
  try {
    const baseUrlObj = new URL(baseUrl);
    const resolved = new URL(imageUrl, baseUrl);
    return resolved.toString();
  } catch {
    return null;
  }
}

/**
 * Validate if an image URL is accessible
 * @param {string} imageUrl - The image URL to validate
 * @returns {Promise<boolean>} - True if accessible, false otherwise
 */
async function validateImageUrl(imageUrl) {
  try {
    if (!imageUrl) return false;

    const response = await axios.head(imageUrl, {
      timeout: 5000,
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
    });

    const contentType = response.headers["content-type"];
    return contentType && contentType.startsWith("image/");
  } catch (error) {
    console.log(
      `[ImageExtractor] Image URL validation failed: ${error.message}`,
    );
    return false;
  }
}

module.exports = {
  extractImageFromUrl,
  resolveImageUrl,
  validateImageUrl,
};
