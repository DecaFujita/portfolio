const style = { width: 'inherit', height: 'inherit' }

const ChevronDown = () => (
    <svg style={style} viewBox="0 0 117 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_150_2)">
            <path d="M115.3 1.67993L58.2 38.7799L1.09 1.67993" stroke="#009245" strokeWidth="4" strokeMiterlimit="10"/>
        </g>
        <defs>
        <clipPath id="clip0_150_2">
            <rect width="116.39" height="41.17" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

const SocialIcoCodePen = props => (
    <svg style={style} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.7826 8.16755L10.63 6.06582V2.82925L16.21 6.54927L13.7826 8.16755ZM3.24998 6.54927L8.82996 2.82929V6.06585L5.67741 8.16755L3.24998 6.54927ZM1.14252 5.79091L9.21915 0.406491C9.36392 0.307185 9.5397 0.249268 9.72996 0.249268C9.91939 0.249268 10.0945 0.306683 10.2389 0.405199L18.3172 5.79073C18.5662 5.95017 18.73 6.22919 18.73 6.54917L18.73 11.9492C18.73 12.2673 18.5681 12.545 18.3215 12.7049L10.2453 18.0889C10.0997 18.1902 9.92222 18.2493 9.72996 18.2493C9.5372 18.2493 9.3593 18.1899 9.21346 18.0882L1.13809 12.7046C0.891731 12.5446 0.72998 12.2671 0.72998 11.9492V6.54927V6.54917C0.72998 6.22932 0.893671 5.95039 1.14252 5.79091ZM10.63 15.6692L16.21 11.9492L13.7826 10.3309L10.63 12.4326V15.6692ZM8.82996 12.4326V15.6692L3.24998 11.9492L5.67741 10.3309L8.82996 12.4326ZM4.05491 9.24922L2.52998 8.2326V10.2658L4.05491 9.24922ZM16.93 8.23259L15.4051 9.24922L16.93 10.2658V8.23259ZM7.29991 9.24922L9.72998 7.62917L12.1601 9.24922L9.72998 10.8693L7.29991 9.24922Z" fill={props.fill}/>
    </svg>
)

const SocialIcoLinkedIn = props => (
    <svg style={style} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.7311 18.2387H14.9957V12.3974C14.9957 11.0006 14.9745 9.21223 13.0592 9.21223C11.1438 9.21223 10.8158 10.7255 10.8158 12.3022V18.2493H7.08033V6.21752H10.657V7.85773H10.71C11.4401 6.60906 12.7946 5.86832 14.2444 5.92123C18.0221 5.92123 18.7205 8.408 18.7205 11.6461V18.2387H18.7311ZM2.87927 4.57731C1.68351 4.57731 0.709961 3.60376 0.709961 2.408C0.709961 1.22281 1.68351 0.249268 2.87927 0.249268C4.07504 0.249268 5.04858 1.22281 5.04858 2.41858C5.04858 3.61435 4.07504 4.58789 2.87927 4.58789V4.57731ZM4.74171 18.2493H1.00626V6.21752H4.74171V18.2387V18.2493Z" fill={props.fill}/>
    </svg>
)

const SocialIcoGitHub = props => (
    <svg style={style} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.47998 9.4719C0.47998 4.37395 4.60998 0.245605 9.70998 0.245605H9.72998C14.83 0.245605 18.96 4.37395 18.96 9.4719C18.96 13.5503 16.31 17.0089 12.65 18.2284C12.19 18.3183 12.02 18.0385 12.02 17.7885C12.02 17.6895 12.0211 17.5142 12.0225 17.2794V17.2794V17.2793V17.2792V17.2791V17.2789V17.2787C12.0255 16.8026 12.03 16.0826 12.03 15.2596C12.03 14.3999 11.73 13.8401 11.4 13.5503C13.45 13.3203 15.61 12.5407 15.61 9.00208C15.61 7.99249 15.25 7.17282 14.66 6.52308C14.76 6.29317 15.07 5.35355 14.57 4.08406C14.57 4.08406 13.79 3.84416 12.03 5.03368C11.29 4.83376 10.5 4.72381 9.71998 4.72381C8.93998 4.72381 8.14998 4.83376 7.40998 5.03368C5.63998 3.83416 4.86998 4.08406 4.86998 4.08406C4.36998 5.35355 4.67998 6.29317 4.77998 6.52308C4.18998 7.17282 3.82998 7.99249 3.82998 9.00208C3.82998 12.5407 5.97998 13.3303 8.02998 13.5603C7.75998 13.7902 7.51998 14.19 7.43998 14.7898C6.90998 15.0197 5.56998 15.4295 4.74998 14.0201C4.74998 14.0201 4.26998 13.1404 3.33998 13.0704C3.33998 13.0704 2.43998 13.0605 3.27998 13.6302C3.27998 13.6302 3.87998 13.9101 4.29998 14.9797C4.29998 14.9797 4.83998 16.629 7.40998 16.0692C7.41998 16.8389 7.41998 17.5686 7.41998 17.7885C7.41998 18.0285 7.24998 18.3183 6.78998 18.2284C3.11998 17.0089 0.47998 13.5503 0.47998 9.4719ZM3.81997 13.5202C3.88997 13.5502 3.97997 13.4902 3.97997 13.4902C4.00997 13.4402 3.96997 13.3802 3.89997 13.3502C3.82997 13.3202 3.75997 13.3302 3.73997 13.3802C3.71997 13.4302 3.74997 13.4902 3.81997 13.5202ZM4.34996 13.9102C4.34996 13.9102 4.21996 13.9302 4.15996 13.8702C4.09996 13.8102 4.08996 13.7202 4.12996 13.6802C4.17996 13.6402 4.25996 13.6602 4.31996 13.7202C4.37996 13.7902 4.38996 13.8702 4.34996 13.9102ZM4.49996 14.36C4.55996 14.44 4.64996 14.48 4.70996 14.44C4.76996 14.4 4.76996 14.3 4.70996 14.22C4.64996 14.14 4.55996 14.1 4.49996 14.14C4.43996 14.18 4.43996 14.28 4.49996 14.36ZM5.20996 14.9497C5.15996 15.0097 5.04996 14.9897 4.96996 14.9097C4.88996 14.8397 4.86996 14.7297 4.91996 14.6697C4.96996 14.6097 5.07996 14.6297 5.15996 14.7097C5.23996 14.7797 5.25996 14.8897 5.20996 14.9497ZM5.66996 15.3197C5.76996 15.3597 5.87996 15.3197 5.89996 15.2497C5.91996 15.1797 5.84996 15.0897 5.74996 15.0597C5.64996 15.0197 5.53996 15.0597 5.51996 15.1297C5.49996 15.1997 5.56996 15.2897 5.66996 15.3197ZM6.65 15.3095C6.65 15.3895 6.56 15.4495 6.45 15.4495C6.34 15.4495 6.25 15.3895 6.25 15.3195C6.25 15.2395 6.34 15.1795 6.45 15.1795C6.56 15.1795 6.65 15.2395 6.65 15.3095ZM7.19 15.3595C7.3 15.3395 7.37 15.2595 7.36 15.1895C7.35 15.1195 7.25 15.0695 7.14 15.0895C7.03 15.1095 6.96 15.1795 6.97 15.2595C6.98 15.3295 7.08 15.3795 7.19 15.3595Z" fill={props.fill}/>
    </svg>
)

const SocialIcoInsta = props => (
    <svg style={style}  viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.45996 1.92188C11.8627 1.92188 12.153 1.92188 13.104 1.97192C13.985 2.01196 14.4556 2.16211 14.7759 2.28223C15.1963 2.44238 15.4967 2.64258 15.807 2.95288C16.1173 3.26343 16.3176 3.56372 16.4778 3.98413C16.5979 4.30444 16.748 4.7749 16.7881 5.65601C16.8281 6.60693 16.8381 6.88745 16.8381 9.30005C16.8381 11.7126 16.8381 11.9929 16.7881 12.9441C16.748 13.825 16.5979 14.2957 16.4778 14.616C16.3176 15.0364 16.1173 15.3367 15.807 15.6472C15.6377 15.8167 15.4713 15.9531 15.2867 16.0681C15.1332 16.1641 14.9669 16.2451 14.7759 16.3179C14.4556 16.438 13.985 16.5881 13.104 16.6282C12.153 16.6682 11.8727 16.6782 9.45996 16.6782C7.04724 16.6782 6.76697 16.6782 5.81592 16.6282C4.93494 16.5881 4.46436 16.438 4.14404 16.3179C3.72363 16.1577 3.42322 15.9575 3.11292 15.6472C2.80261 15.3367 2.60229 15.0364 2.44214 14.616C2.32202 14.2957 2.17188 13.825 2.13184 12.9441C2.0918 11.9929 2.08179 11.7126 2.08179 9.30005C2.08179 6.88745 2.08179 6.60693 2.13184 5.65601C2.17188 4.7749 2.32202 4.30444 2.44214 3.98413C2.60229 3.56372 2.80261 3.26343 3.11292 2.95288C3.29114 2.77466 3.46619 2.63281 3.6626 2.51392C3.80811 2.42578 3.96521 2.35034 4.14404 2.28223C4.46436 2.16211 4.93494 2.01196 5.81592 1.97192C6.76697 1.93188 7.04724 1.92188 9.45996 1.92188ZM9.45996 0.300049C7.01721 0.300049 6.70691 0.310059 5.74585 0.350098C4.78479 0.390137 4.13403 0.550293 3.56335 0.770508C2.97278 1.00073 2.47217 1.31128 1.97168 1.81177C1.47107 2.31226 1.16077 2.81274 0.930542 3.40356C0.710205 3.97412 0.560059 4.63477 0.51001 5.58594C0.469971 6.54688 0.459961 6.85742 0.459961 9.30005C0.459961 10.1072 0.46106 10.6816 0.463989 11.1235C0.469849 12.0188 0.483154 12.3708 0.51001 13.0142C0.550049 13.9753 0.710205 14.626 0.930542 15.1965C1.16077 15.7874 1.47107 16.2878 1.97168 16.7883C2.47217 17.2888 2.97278 17.5994 3.56335 17.8296C4.13403 18.0498 4.7948 18.2 5.74585 18.25C6.70691 18.29 7.01721 18.3 9.45996 18.3C11.9027 18.3 12.213 18.29 13.1741 18.25C14.1351 18.21 14.7859 18.0498 15.3566 17.8296C15.9471 17.5994 16.4478 17.2888 16.9482 16.7883C17.4489 16.2878 17.7592 15.7874 17.9895 15.1965C18.2097 14.626 18.3599 13.9653 18.4099 13.0142C18.4225 12.7119 18.4321 12.4741 18.4393 12.2141L18.4456 11.9617C18.4565 11.4343 18.46 10.7351 18.46 9.30005C18.46 6.85742 18.45 6.54688 18.4099 5.58594C18.3699 4.62476 18.2097 3.97412 17.9895 3.40356C17.7592 2.81274 17.4489 2.31226 16.9482 1.81177C16.4478 1.31128 15.9471 1.00073 15.3566 0.770508C14.7859 0.550293 14.1251 0.400146 13.1741 0.350098C12.6774 0.329346 12.3545 0.31665 11.821 0.309326C11.3225 0.30249 10.6401 0.300049 9.45996 0.300049ZM9.45996 4.68481C6.9071 4.68481 4.83484 6.75708 4.83484 9.31006C4.83484 11.8628 6.9071 13.9351 9.45996 13.9351C12.0128 13.9351 14.0851 11.8628 14.0851 9.31006C14.0851 6.75708 12.0128 4.68481 9.45996 4.68481ZM9.45996 12.3132C7.7981 12.3132 6.45667 10.9719 6.45667 9.31006C6.45667 7.64819 7.7981 6.30664 9.45996 6.30664C11.1218 6.30664 12.4633 7.64819 12.4633 9.31006C12.4633 10.9719 11.1218 12.3132 9.45996 12.3132ZM14.2753 5.58569C14.876 5.58569 15.3564 5.10522 15.3564 4.50464C15.3564 3.90381 14.876 3.42334 14.2753 3.42334C13.6746 3.42334 13.1941 3.90381 13.1941 4.50464C13.1941 5.10522 13.6746 5.58569 14.2753 5.58569Z" fill={props.fill}/>
    </svg>
)

const SocialIcoMessenger = props => (
    <svg style={style}  viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.45001 0.179932C4.51001 0.179932 0.51001 3.90993 0.51001 8.50993C0.51001 11.1299 1.81001 13.4699 3.84001 14.9999V18.1799L6.89001 16.4999C7.70001 16.7299 8.56001 16.8499 9.46001 16.8499C14.4 16.8499 18.4 13.1199 18.4 8.51994C18.4 3.91994 14.4 0.189941 9.46001 0.189941L9.45001 0.179932ZM10.34 11.3999L8.06001 8.95995L3.62001 11.3999L8.51001 6.17993L10.84 8.61993L15.23 6.17993L10.34 11.3999Z" fill={props.fill}/>
    </svg>
)

const SocialIcoWhatsapp = props => (
    <svg style={style} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.308 3.50602C13.6208 1.80934 11.3839 0.889909 8.99525 0.889909C4.07582 0.880431 0.0758293 4.88991 0.0758293 9.80933C0.0758293 11.3828 0.492891 12.9183 1.26066 14.2643L0 18.8899L4.72985 17.6482C6.03791 18.3591 7.5071 18.7382 8.99525 18.7382C13.9147 18.7382 17.9147 14.7288 17.9147 9.81881C17.9147 7.43019 16.9858 5.19322 15.2986 3.50602H15.308ZM8.99525 17.2311C7.65876 17.2311 6.36018 16.8709 5.21326 16.198L4.93838 16.0368L2.1327 16.7762L2.88151 14.0368L2.70142 13.7619C1.96208 12.5866 1.56398 11.2122 1.56398 9.81881C1.56398 5.73351 4.90047 2.39702 8.98577 2.39702C10.9668 2.39702 12.8341 3.17427 14.2275 4.57711C15.6303 5.97995 16.3981 7.84725 16.3981 9.82829C16.417 13.9136 13.0806 17.2406 8.99525 17.2406V17.2311ZM13.0616 11.6861C12.8341 11.5818 11.7346 11.0416 11.5355 10.9562C11.327 10.8804 11.1848 10.852 11.0332 11.0605C10.8815 11.288 10.455 11.7904 10.3317 11.9326C10.2085 12.0842 10.0663 12.1032 9.84833 11.9894C9.62084 11.8852 8.90046 11.6387 8.05686 10.8804C7.39336 10.2833 6.94786 9.55341 6.81516 9.3354C6.69194 9.10791 6.7962 8.99417 6.90995 8.88042C7.00473 8.78564 7.13743 8.61502 7.2417 8.4918C7.34596 8.36858 7.39336 8.26431 7.46919 8.12213C7.54502 7.97047 7.5071 7.84725 7.45023 7.73351C7.39336 7.61976 6.94786 6.52972 6.76777 6.07474C6.58767 5.63872 6.3981 5.69559 6.2654 5.68611H5.82938C5.67772 5.68611 5.44075 5.74299 5.23222 5.961C5.03317 6.18848 4.45497 6.72877 4.45497 7.82829C4.45497 8.92782 5.26066 9.98943 5.36492 10.1316C5.46919 10.2833 6.93838 12.5392 9.17535 13.4965C9.70615 13.7335 10.1232 13.8662 10.4455 13.961C10.9763 14.1316 11.4597 14.1032 11.8483 14.0558C12.2843 13.9894 13.1753 13.5155 13.3554 12.9942C13.545 12.4728 13.545 12.0273 13.4787 11.9326C13.4123 11.8378 13.2796 11.7904 13.0521 11.6766L13.0616 11.6861Z" fill="#272727"/>
    </svg>
)

const PinIco = props => (
    <svg style={{width: 'inherit', height: 'inherit', transform: 'translateX(.3rem)'}} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.74995 0C3.26695 0 0.449951 2.817 0.449951 6.3C0.449951 11.025 6.74995 18 6.74995 18C6.74995 18 13.05 11.025 13.05 6.3C13.05 2.817 10.233 0 6.74995 0ZM6.74995 8.55C5.50795 8.55 4.49995 7.542 4.49995 6.3C4.49995 5.058 5.50795 4.05 6.74995 4.05C7.99195 4.05 8.99995 5.058 8.99995 6.3C8.99995 7.542 7.99195 8.55 6.74995 8.55Z" fill={props.fill}/>
    </svg>
)

const EmailIco = props => (
    <svg style={style}  viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.44995 0.77002C4.47995 0.77002 0.449951 4.80002 0.449951 9.77002C0.449951 14.74 4.47995 18.77 9.44995 18.77H13.95V16.97H9.44995C5.53995 16.97 2.24995 13.68 2.24995 9.77002C2.24995 5.86002 5.53995 2.57002 9.44995 2.57002C13.36 2.57002 16.65 5.86002 16.65 9.77002V11.06C16.65 11.77 16.01 12.47 15.3 12.47C14.59 12.47 13.95 11.77 13.95 11.06V9.77002C13.95 7.29002 11.93 5.27002 9.44995 5.27002C6.96995 5.27002 4.94995 7.29002 4.94995 9.77002C4.94995 12.25 6.96995 14.27 9.44995 14.27C10.69 14.27 11.83 13.77 12.64 12.95C13.23 13.75 14.23 14.27 15.3 14.27C17.07 14.27 18.45 12.83 18.45 11.06V9.77002C18.45 4.80002 14.42 0.77002 9.44995 0.77002V0.77002ZM9.44995 12.47C7.95995 12.47 6.74995 11.26 6.74995 9.77002C6.74995 8.28002 7.95995 7.07002 9.44995 7.07002C10.94 7.07002 12.15 8.28002 12.15 9.77002C12.15 11.26 10.94 12.47 9.44995 12.47Z" fill={props.fill}/>
    </svg>
)



export { 
    ChevronDown, 
    SocialIcoCodePen, 
    SocialIcoLinkedIn, 
    SocialIcoGitHub, 
    SocialIcoInsta,
    SocialIcoMessenger,
    SocialIcoWhatsapp,
    EmailIco,
    PinIco,
};