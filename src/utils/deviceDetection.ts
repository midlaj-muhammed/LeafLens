/**
 * Utility function to detect if the current device is a mobile device
 * @returns boolean indicating if the device is mobile
 */
export const isMobileDevice = (): boolean => {
  try {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return false;
    }

    // Check for touch support as a primary indicator
    const hasTouchSupport =
      'ontouchstart' in window ||
      (window.navigator && navigator.maxTouchPoints > 0) ||
      (window.navigator && (navigator as any).msMaxTouchPoints > 0);

    // Check user agent string for mobile devices
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileUserAgent = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent);

    // Check screen size (typical mobile breakpoint)
    const hasSmallScreen = window.innerWidth <= 768;

    // Consider it a mobile device if it has touch support AND either has a mobile user agent OR a small screen
    return hasTouchSupport && (isMobileUserAgent || hasSmallScreen);
  } catch (error) {
    console.error('Error detecting mobile device:', error);
    // Default to false if there's an error
    return false;
  }
};

/**
 * Checks if the device has camera capabilities
 * @returns boolean indicating if the device has camera capabilities
 */
export const hasCameraCapabilities = async (): Promise<boolean> => {
  try {
    // Check if window and navigator are defined
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return false;
    }

    // Check if mediaDevices API is supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      // Fallback to mobile detection if mediaDevices API is not available
      return isMobileDevice();
    }

    try {
      // Get all media devices
      const devices = await navigator.mediaDevices.enumerateDevices();
      // Check if any of the devices is a video input (camera)
      return devices.some(device => device.kind === 'videoinput');
    } catch (error) {
      console.error('Error checking camera capabilities:', error);
      // Fallback to mobile detection if enumerateDevices fails
      return isMobileDevice();
    }
  } catch (error) {
    console.error('Error in hasCameraCapabilities:', error);
    return false;
  }
};
