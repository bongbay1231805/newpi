'use client';
import { useRef } from 'react';
import HomeHero from '@/components/home/HomeHero';
import DigitalCity from '@/components/home/DigitalCity';
export default function ClientUseRef() {
  const digitalCityRef = useRef<HTMLDivElement>(null);
  const scrollToDigitalCity = () => {
    digitalCityRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <HomeHero onScrollToDigitalCity={scrollToDigitalCity} />
      <div className="relative bg-no-repeat bg-position-[0_-75px] bg-size-[20%_60%] xl:bg-size-[15%_75%] lg:bg-size-[10%_60%] 2xl:bg-size-[contain]">
        <div className='absolute top-[-100px]'>
          <svg
            width="272"
            height="544"
            viewBox="0 0 272 544"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                className="animate-half-circle"
                d="M-257.189 226.52C-230.467 94.9882 -113.477 7.58707 23.9133 15.4157"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M23.7229 17.4475C24.8644 17.4972 25.823 16.6376 25.8742 15.5294C25.9254 14.4211 25.04 13.4905 23.8985 13.4408C22.757 13.391 21.7985 14.2506 21.7472 15.3589C21.696 16.4671 22.5814 17.3977 23.7229 17.4475Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M-49.0995 469.727C-90.5595 458.83 -122.77 439.606 -151.476 409.648C-280.21 268.548 -164.699 52.2575 27.0008 71.1898"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M26.7084 73.2073C27.8426 73.3067 28.8451 72.4969 28.9475 71.3957C29.05 70.2946 28.2158 69.3213 27.0816 69.2219C25.9474 69.1224 24.9449 69.9323 24.8425 71.0334C24.7401 72.1345 25.5742 73.1078 26.7084 73.2073Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M-163.989 229.056C-127.615 102.625 30.8202 61.4073 127.629 152.162"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M126.115 153.554C126.941 154.314 128.244 154.286 129.034 153.483C129.817 152.68 129.788 151.416 128.961 150.649C128.134 149.888 126.832 149.917 126.041 150.72C125.258 151.522 125.288 152.787 126.115 153.554Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M-129.641 233.368C-92.6149 119.078 63.9395 101.765 126.378 205.158"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M124.533 206.11C125.119 207.062 126.385 207.374 127.358 206.806C128.338 206.238 128.66 205.009 128.075 204.064C127.49 203.112 126.224 202.799 125.251 203.368C124.27 203.936 123.948 205.165 124.533 206.11Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M33.6082 429.028C-144.049 459.32 -234.784 231.45 -81.8081 138.174"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M33.1696 427.039C34.2964 426.861 35.3575 427.6 35.5404 428.694C35.7233 429.788 34.9623 430.818 33.8355 430.996C32.7086 431.173 31.6476 430.435 31.4646 429.341C31.2817 428.246 32.0427 427.216 33.1696 427.039Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M-184.155 106.49C-112.819 32.6431 -9.51974 7.52319 89.5131 40.3439C305.506 117.75 317.96 404.682 109.848 499.45"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M109.029 497.575C108.004 498.058 107.572 499.252 108.07 500.253C108.568 501.248 109.797 501.667 110.829 501.184C111.853 500.701 112.285 499.507 111.787 498.506C111.29 497.504 110.06 497.092 109.029 497.575Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M-63.1777 207.865C-26.9277 173.268 28.889 171.485 67.3123 204.959"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M65.8484 206.408C66.6972 207.14 68.007 207.069 68.7607 206.238C69.5144 205.414 69.4412 204.142 68.5851 203.41C67.7363 202.679 66.4265 202.75 65.6728 203.581C64.9191 204.405 64.9923 205.677 65.8484 206.408Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M96.3395 375.833C20.9563 437.695 -92.3527 409.577 -127.249 319.221"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M94.927 374.305C95.8124 373.609 97.1075 373.737 97.832 374.59C98.5491 375.449 98.4173 376.707 97.5393 377.41C96.6539 378.106 95.3587 377.978 94.6343 377.126C93.9172 376.266 94.0489 375.009 94.927 374.305Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M186.709 430.427C117.158 504.068 16.5301 526.901 -77.6074 495.081"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M185.114 429.113C185.889 428.303 187.199 428.268 188.033 429.021C188.868 429.774 188.904 431.046 188.129 431.855C187.353 432.665 186.043 432.701 185.209 431.948C184.375 431.195 184.338 429.923 185.114 429.113Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M74.0376 258.886C80.8646 294.527 59.9663 328.989 21.4552 339.353C-31.6979 350.961 -75.8215 307.783 -65.4748 257.287"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M72.0031 259.362C71.7909 258.275 72.53 257.231 73.6495 257.025C74.7691 256.819 75.8447 257.536 76.0569 258.623C76.2691 259.71 75.5301 260.754 74.4105 260.96C73.291 261.166 72.2153 260.449 72.0031 259.362Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M96.1282 290.108C89.967 319 71.6371 342.316 43.4727 355.394"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M94.0569 289.774C94.2984 288.695 95.396 288.005 96.5082 288.24C97.6205 288.474 98.3302 289.54 98.0888 290.62C97.8473 291.7 96.7497 292.389 95.6375 292.154C94.5252 291.92 93.8155 290.854 94.0569 289.774Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M42.6458 353.519C41.6214 354.009 41.2043 355.21 41.7019 356.197C42.1994 357.185 43.4434 357.597 44.4605 357.114C45.4849 356.623 45.902 355.423 45.4044 354.435C44.8995 353.441 43.6629 353.036 42.6458 353.519Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M-43.3994 52.1296C178.199 8.63152 329.807 262.95 174.474 427.039"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M172.981 425.604C172.22 426.428 172.294 427.692 173.142 428.431C173.991 429.17 175.294 429.099 176.055 428.275C176.816 427.451 176.743 426.186 175.894 425.448C175.045 424.709 173.742 424.78 172.981 425.604Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M105.085 242.54C134.362 337.514 23.4454 414.287 -59.4746 355.046"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M103.109 243.214C102.787 242.156 103.409 241.04 104.507 240.728C105.597 240.415 106.746 241.019 107.068 242.085C107.39 243.143 106.768 244.259 105.67 244.571C104.58 244.884 103.431 244.28 103.109 243.214Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M187.382 344.12C148.117 436.906 46.0992 486.741 -56.6143 456.109"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M185.414 343.41C185.86 342.394 187.075 341.918 188.122 342.351C189.168 342.785 189.658 343.964 189.212 344.98C188.765 345.996 187.551 346.472 186.504 346.038C185.458 345.605 184.968 344.426 185.414 343.41Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M93.9473 183.391C127.695 216.361 140.303 261.642 127.314 307.137"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M92.4988 184.883C91.7086 184.087 91.7378 182.816 92.5647 182.049C93.3842 181.281 94.694 181.31 95.4843 182.112C96.2746 182.915 96.2453 184.18 95.4184 184.947C94.5989 185.714 93.2891 185.686 92.4988 184.883Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M125.296 306.526C125.01 307.598 125.676 308.693 126.781 308.962C127.886 309.24 129.013 308.593 129.291 307.52C129.576 306.448 128.91 305.354 127.805 305.084C126.7 304.807 125.581 305.453 125.296 306.526Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M178.916 288.091C161.098 459.98 -78.2665 502.207 -154.477 342.671"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M176.823 287.963C176.948 286.862 177.972 286.073 179.106 286.194C180.24 286.315 181.053 287.309 180.928 288.41C180.804 289.511 179.779 290.3 178.645 290.179C177.511 290.058 176.699 289.064 176.823 287.963Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M212.451 203.822C238.969 281.683 221.02 363.557 160.513 424.24"
                stroke="#4C73A8"
                strokeWidth="0.75"
                strokeLinecap="round"
              />
              <path
                className="animate-half-circle"
                d="M210.49 204.54C210.139 203.488 210.739 202.359 211.822 202.018C212.905 201.677 214.068 202.259 214.419 203.311C214.771 204.362 214.171 205.492 213.088 205.833C212.005 206.174 210.841 205.591 210.49 204.54Z"
                fill="#4C73A8"
              />
              <path
                className="animate-half-circle"
                d="M159.072 422.769C158.289 423.572 158.318 424.836 159.145 425.604C159.972 426.364 161.274 426.335 162.064 425.533C162.847 424.73 162.818 423.465 161.991 422.698C161.164 421.931 159.862 421.966 159.072 422.769Z"
                fill="#4C73A8"
              />
            </g>
          </svg>
        </div>
        <DigitalCity ref={digitalCityRef} />
      </div>
    </>
  )
}