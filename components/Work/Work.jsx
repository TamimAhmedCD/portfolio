"use client";

import Image from "next/image";
import { Timeline } from "../ui/timeline";
import portfolio1 from "../../public/portfolio1.png";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

// Tech icons for each technology
const techIcons = {
  React: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="22"
      viewBox="175.7 78 490.6 436.9"
      width="22"
    >
      <g fill="#61dafb">
        <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
        <circle cx="420.9" cy="296.5" r="45.7" />
      </g>
    </svg>
  ),
  "Tailwind CSS": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 54 33"
      width="23"
      height="23"
    >
      <g clip-path="url(#prefix__clip0)">
        <path
          fill="#38bdf8"
          fill-rule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clip-rule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  MongoDB: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="22"
      height="22"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#439934"
        d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#45A538"
        d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#46A037"
        d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#409433"
        d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#4FAA41"
        d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#4AA73C"
        d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#57AE47"
        d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#60B24F"
        d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#A9AA88"
        d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#B6B598"
        d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#C2C1A7"
        d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#CECDB7"
        d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#DBDAC7"
        d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#EBE9DC"
        d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#CECDB7"
        d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="#4FAA41"
        d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
      />
    </svg>
  ),
  JWT: (
    <svg
      height="22"
      viewBox=".4 .3 99.7 100"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          d="m57.8 27.2-.1-26.9h-15l.1 26.9 7.5 10.3zm-15 46.1v27h15v-27l-7.5-10.3z"
          fill="#fff"
        />
        <path
          d="m57.8 73.3 15.8 21.8 12.1-8.8-15.8-21.8-12.1-3.9zm-15-46.1-15.9-21.8-12.1 8.8 15.8 21.8 12.2 3.9z"
          fill="#00f2e6"
        />
        <path
          d="m30.6 36-25.6-8.3-4.6 14.2 25.6 8.4 12.1-4zm31.8 18.2 7.5 10.3 25.6 8.3 4.6-14.2-25.6-8.3z"
          fill="#00b9f1"
        />
        <path
          d="m74.5 50.3 25.6-8.4-4.6-14.2-25.6 8.3-7.5 10.3zm-48.5 0-25.6 8.3 4.6 14.2 25.6-8.3 7.5-10.3z"
          fill="#d63aff"
        />
        <path
          d="m30.6 64.5-15.8 21.8 12.1 8.8 15.9-21.8v-12.7zm39.3-28.5 15.8-21.8-12.1-8.8-15.8 21.8v12.7z"
          fill="#fb015b"
        />
      </g>
    </svg>
  ),
  Firebase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="22"
      height="22"
      viewBox="-47.5 0 351 351"
      version="1.1"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <path
          d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z"
          id="path-1"
        />
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feGaussianBlur
            stdDeviation="17.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="0"
            dy="0"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
        <path
          d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z"
          id="path-3"
        />
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          id="filter-4"
        >
          <feGaussianBlur
            stdDeviation="3.5"
            in="SourceAlpha"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="1"
            dy="-9"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
      </defs>
      <g>
        <path
          d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z"
          fill="#FFC24A"
        />
        <g>
          <use fill="#FFA712" fillRule="evenodd" xlinkHref="#path-1" />
          <use
            fill="#000000"
            fillOpacity="1"
            filter="url(#filter-2)"
            xlinkHref="#path-1"
          />
        </g>
        <path
          d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z"
          fill="#F4BD62"
        />
        <g>
          <use fill="#FFA50E" fillRule="evenodd" xlinkHref="#path-3" />
          <use
            fill="#000000"
            fillOpacity="1"
            filter="url(#filter-4)"
            xlinkHref="#path-3"
          />
        </g>
        <polygon
          fill="#F6820C"
          points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"
        />
        <path
          d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268"
          fill="#FDE068"
        />
        <path
          d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z"
          fill="#FCCA3F"
        />
        <path
          d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z"
          fill="#EEAB37"
        />
      </g>
    </svg>
  ),
  Nextjs: (
    <svg
      className="dark:fill-white"
      height="22"
      viewBox=".5 -.2 1023 1024.1"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
      <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
    </svg>
  ),
  shadcn: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="22"
      height="22"
    >
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      ></line>
    </svg>
  ),
  FramerMotion: (
    <svg
      height="22"
      viewBox="3.7 3.7 43.6 43.6"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
        fill="#59529d"
      />
      <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
      <path
        d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
        fill="#bb4b96"
      />
    </svg>
  ),
};

export default function Work() {
  // Projects data
  const projects = [
    {
      id: "1",
      name: "Portfolio",
      techUsed: [
        "Nextjs",
        "Tailwind CSS",
        "FramerMotion",
        "shadcn",
      ],
      description:
        "A responsive portfolio showcasing my skills, projects, and developer journey with sleek design and smooth animations.",
      image: "portfolio-image-url.jpg",
      shortDescription:
        "A sleek portfolio with smooth animations and responsive design.",
    },
    {
      id: "2",
      name: "AssetEase",
      techUsed: ["React", "Tailwind CSS", "MongoDB", "Firebase", "JWT"],
      description:
        "AssetEase is an asset management system designed for businesses to track company assets used by employees. It supports returnable and non-returnable assets, with features for requesting, approving, and managing assets efficiently.",
      image: "assetease-image-url.jpg",
      shortDescription:
        "A modern asset management system for tracking company assets.",
    },
    {
      id: "3",
      name: "Chill Gamer",
      techUsed: ["React", "API Integration", "Local Storage"],
      description:
        "Chill Gamer is a web-based quiz application with gamification elements, fetching quiz data from an API. It tracks user progress and displays a summary of quiz results, enhancing the learning experience with a sleek UI.",
      image: "chillgamer-image-url.jpg",
      shortDescription: "A gamified quiz application with API-based questions.",
    },
  ];

  // Data for Timeline component
  const data = projects.map((project) => ({
    title: project.name,
    tech: (
      <div className="flex justify-between items-center">
        <span className="font-semibold mr-2">Tech Used:</span>
        <div className="tech-stack flex gap-2">
          {project.techUsed.map((tech) => (
            <div key={tech} className="tech-item flex items-center gap-1">
              <span className="tech-icon">{techIcons[tech]}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    description: project.shortDescription,
    details: (
      <AnimatedShinyText className="inline-flex cursor-pointer items-center justify-center py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        <span>✨ View Project</span>
        <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedShinyText>
    ),
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          {project.description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src={portfolio1}
            alt={project.name}
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={portfolio1}
            alt={project.name}
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  }));

  return (
    <div id="work">
      {/* Pass the data to Timeline component */}
      <Timeline data={data} />
    </div>
  );
}
