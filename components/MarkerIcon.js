const MarkerIcon = L.divIcon({
  html: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_180_7)">
  <path d="M24 4C16.26 4 10 10.26 10 18C10 28.5 24 44 24 44C24 44 38 28.5 38 18C38 10.26 31.74 4 24 4ZM24 23C21.24 23 19 20.76 19 18C19 15.24 21.24 13 24 13C26.76 13 29 15.24 29 18C29 20.76 26.76 23 24 23Z" fill="#0F3375"/>
  <ellipse cx="24.5" cy="18" rx="5.5" ry="6" fill="#0F3375"/>
  <path d="M15.875 18.125C15.7092 18.125 15.5503 18.0592 15.4331 17.9419C15.3158 17.8247 15.25 17.6658 15.25 17.5C15.25 17.3342 15.3158 17.1753 15.4331 17.0581C15.5503 16.9408 15.7092 16.875 15.875 16.875H23.375C23.6032 16.8748 23.827 16.8122 24.0221 16.6939C24.2172 16.5756 24.3762 16.4062 24.4819 16.2039C24.5876 16.0017 24.6359 15.7744 24.6216 15.5466C24.6073 15.3189 24.5309 15.0994 24.4008 14.912C24.2706 14.7246 24.0916 14.5764 23.8832 14.4834C23.6749 14.3905 23.445 14.3563 23.2186 14.3847C22.9922 14.4131 22.7778 14.5029 22.5988 14.6444C22.4198 14.7859 22.283 14.9737 22.2031 15.1875C22.1782 15.2687 22.1371 15.344 22.0821 15.4087C22.0272 15.4735 21.9596 15.5264 21.8836 15.5642C21.8075 15.6019 21.7246 15.6238 21.6398 15.6285C21.555 15.6331 21.4701 15.6205 21.3904 15.5912C21.3106 15.562 21.2377 15.5168 21.176 15.4584C21.1143 15.4001 21.0652 15.3297 21.0316 15.2518C20.998 15.1738 20.9806 15.0897 20.9805 15.0048C20.9805 14.9199 20.9977 14.8358 21.0312 14.7578C21.1897 14.3293 21.4626 13.9525 21.8202 13.6681C22.1778 13.3838 22.6064 13.2029 23.0596 13.1451C23.5128 13.0873 23.9731 13.1547 24.3906 13.3401C24.8082 13.5256 25.1669 13.8218 25.4279 14.1968C25.6889 14.5717 25.8422 15.011 25.871 15.467C25.8999 15.9229 25.8033 16.378 25.5917 16.7829C25.3801 17.1878 25.0616 17.527 24.6708 17.7636C24.28 18.0002 23.8318 18.1252 23.375 18.125H15.875ZM25.875 21.875H17.125C16.9592 21.875 16.8003 21.9408 16.6831 22.0581C16.5658 22.1753 16.5 22.3342 16.5 22.5C16.5 22.6658 16.5658 22.8247 16.6831 22.9419C16.8003 23.0592 16.9592 23.125 17.125 23.125H25.875C26.1032 23.1252 26.327 23.1878 26.5221 23.3061C26.7172 23.4244 26.8762 23.5938 26.9819 23.7961C27.0876 23.9983 27.1359 24.2256 27.1216 24.4534C27.1073 24.6811 27.0309 24.9006 26.9008 25.088C26.7706 25.2754 26.5916 25.4236 26.3832 25.5166C26.1749 25.6095 25.945 25.6437 25.7186 25.6153C25.4922 25.5869 25.2778 25.4971 25.0988 25.3556C24.9198 25.2141 24.783 25.0263 24.7031 24.8125C24.6782 24.7313 24.6371 24.656 24.5821 24.5913C24.5272 24.5265 24.4596 24.4736 24.3836 24.4358C24.3075 24.3981 24.2246 24.3762 24.1398 24.3715C24.055 24.3669 23.9701 24.3796 23.8904 24.4088C23.8106 24.438 23.7377 24.4832 23.676 24.5416C23.6143 24.5999 23.5652 24.6703 23.5316 24.7482C23.498 24.8262 23.4806 24.9103 23.4805 24.9952C23.4805 25.0801 23.4977 25.1642 23.5312 25.2422C23.6897 25.6707 23.9626 26.0475 24.3202 26.3319C24.6778 26.6162 25.1064 26.7971 25.5596 26.8549C26.0128 26.9127 26.4731 26.8453 26.8906 26.6599C27.3082 26.4744 27.6669 26.1782 27.9279 25.8032C28.1889 25.4283 28.3422 24.989 28.371 24.533C28.3999 24.0771 28.3033 23.622 28.0917 23.2171C27.8801 22.8122 27.5616 22.473 27.1708 22.2364C26.78 21.9998 26.3318 21.8748 25.875 21.875V21.875ZM30.25 15.625C29.7396 15.6263 29.2417 15.7833 28.8229 16.0751C28.4041 16.3669 28.0843 16.7795 27.9062 17.2578C27.8727 17.3358 27.8555 17.4199 27.8555 17.5048C27.8556 17.5897 27.873 17.6738 27.9066 17.7518C27.9402 17.8297 27.9893 17.9001 28.051 17.9584C28.1127 18.0168 28.1856 18.062 28.2654 18.0912C28.3451 18.1205 28.43 18.1331 28.5148 18.1285C28.5996 18.1238 28.6825 18.1019 28.7586 18.0642C28.8346 18.0264 28.9022 17.9735 28.9571 17.9087C29.0121 17.844 29.0532 17.7687 29.0781 17.6875C29.158 17.4737 29.2948 17.2859 29.4738 17.1444C29.6528 17.0029 29.8672 16.9131 30.0936 16.8847C30.32 16.8563 30.5499 16.8905 30.7582 16.9834C30.9666 17.0764 31.1456 17.2246 31.2758 17.412C31.4059 17.5994 31.4823 17.8189 31.4966 18.0466C31.5109 18.2744 31.4626 18.5017 31.3569 18.7039C31.2512 18.9062 31.0922 19.0756 30.8971 19.1939C30.702 19.3122 30.4782 19.3748 30.25 19.375H16.5C16.3342 19.375 16.1753 19.4408 16.0581 19.5581C15.9408 19.6753 15.875 19.8342 15.875 20C15.875 20.1658 15.9408 20.3247 16.0581 20.4419C16.1753 20.5592 16.3342 20.625 16.5 20.625H30.25C30.913 20.625 31.5489 20.3616 32.0178 19.8928C32.4866 19.4239 32.75 18.788 32.75 18.125C32.75 17.462 32.4866 16.8261 32.0178 16.3572C31.5489 15.8884 30.913 15.625 30.25 15.625V15.625Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_180_7">
  <rect width="48" height="48" fill="white"/>
  </clipPath>
  </defs>
  </svg>`,
  className: "",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

export default MarkerIcon;
