// Utility functions for tour operations

/**
 * Generate a URL-friendly slug from tour name and code
 * @param {string} name - Tour name
 * @param {string} code - Tour code
 * @returns {string} - URL slug
 */
export function generateTourSlug(name, code) {
  if (!name || !code) return code || 'tour'

  // Convert name to slug format
  const nameSlug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')          // Replace spaces with hyphens
    .replace(/-+/g, '-')           // Replace multiple hyphens with single
    .substring(0, 50)              // Limit length

  // Combine with code for uniqueness
  return `${nameSlug}-${code.toLowerCase()}`
}

/**
 * Extract tour code from slug
 * @param {string} slug - URL slug
 * @returns {string} - Tour code
 */
export function extractCodeFromSlug(slug) {
  if (!slug) return ''

  // Code is after the last hyphen
  const parts = slug.split('-')
  return parts[parts.length - 1].toUpperCase()
}

/**
 * Get valid image URL or fallback
 * @param {object} tour - Tour object
 * @returns {string} - Image URL
 */
export function getTourImage(tour) {
  // Check card_image
  if (tour.card_image && !tour.card_image.includes('kesari-logo') && !tour.card_image.startsWith('../')) {
    return tour.card_image
  }

  // Check slider_images
  if (tour.slider_images && tour.slider_images.length > 0) {
    const validImage = tour.slider_images.find(img =>
      img && !img.includes('kesari-logo') && !img.startsWith('../')
    )
    if (validImage) return validImage
  }

  // Return placeholder
  return 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
}

/**
 * Validate tour code
 * @param {string} code - Tour code
 * @returns {boolean} - Is valid
 */
export function isValidTourCode(code) {
  return code && code.trim() !== '' && !code.includes('undefined')
}
