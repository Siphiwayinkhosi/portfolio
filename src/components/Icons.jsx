export const ArrowUpRightIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const ArrowDownIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="m7 10 5 5 5-5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
);

export const LinkedInIcon = ({ size = 20 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M7.2 9.6V17M7.2 7.2v.1M10.8 17v-4.2c0-1.77 1.13-3.2 2.8-3.2s3.2 1.03 3.2 3.2V17m-6-4.2V9.6M6 3.6h12A2.4 2.4 0 0 1 20.4 6v12a2.4 2.4 0 0 1-2.4 2.4H6A2.4 2.4 0 0 1 3.6 18V6A2.4 2.4 0 0 1 6 3.6Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
);

export const GitHubIcon = ({ size = 20 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M15.5 20v-3.5c.12-1.08-.25-2.14-1-2.9 3.3-.37 6.77-1.62 6.77-7.35A5.72 5.72 0 0 0 19.75 2.3 5.34 5.34 0 0 0 19.6-1.6s-1.2-.39-4.1 1.52a14.2 14.2 0 0 0-7.5 0C5.1-2 3.9-1.6 3.9-1.6a5.34 5.34 0 0 0-.15 3.9 5.72 5.72 0 0 0-1.52 3.95c0 5.72 3.47 6.97 6.77 7.35a3.64 3.64 0 0 0-1 2.9V20m0-2.5c-3 .92-3-1.5-4.2-2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      transform="translate(0 2)"
    />
  </svg>
);

export const MailIcon = ({ size = 20 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="m4 6 8 6 8-6M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
);

export const PhoneIcon = ({ size = 20 }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height={size}
    viewBox="0 0 24 24"
    width={size}
  >
    <path
      d="M7.4 4.8 9.1 8c.3.58.18 1.3-.29 1.76l-1 1a12.5 12.5 0 0 0 5.43 5.43l1-1c.46-.47 1.18-.59 1.76-.29l3.2 1.7c.72.38 1.05 1.23.77 1.99l-.6 1.66c-.24.67-.9 1.1-1.6 1.04C9.7 20.66 3.34 14.3 2.7 6.24c-.05-.7.38-1.36 1.04-1.6l1.67-.6c.76-.28 1.6.05 1.99.76Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    />
  </svg>
);

export const MenuIcon = ({ open }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d={open ? "M6 6l12 12M18 6 6 18" : "M4 8h16M8 16h12"}
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  </svg>
);
