
import { OrderStatus, Order, Product, ActivityItem, Category, Brand, Variant } from './types';

export const MOCK_ORDERS: Order[] = [
  { id: '#ORD-2489', customer: 'Mike Anderson', status: OrderStatus.PENDING, total: '$129.00' },
  { id: '#ORD-2488', customer: 'Sarah Lee', status: OrderStatus.COMPLETED, total: '$245.50' },
  { id: '#ORD-2487', customer: 'Jared K.', status: OrderStatus.PROCESSING, total: '$65.00' },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Screaming Hand 8.0" Maple Deck',
    sku: 'SC-DK-80',
    brand: 'Santa Cruz',
    category: 'Skate',
    price: 64.95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlV8hM0mAC1zU-dUKZfCOtsycxA7IQFcz16SDgL0fVlH5GcU88OSQg_tzJXbqRcNZhpx2AvGHaNuoLwbU_EDtidskaNSqR294YyuNCfECdPnJ_HUJ82xy02dfcv1TCjeOOO-tSTgYLHjjfuZSk0CJIhKP1CwaXlXvgOxDBo6dKIR4nZuarIFp2fhmofCQbJa0Yyz25MCqkXp70soPAP0y3itTG-KDBurYrpG5tsGo_FH_DFVtafWvAikP_cwBD3cPqkI2bxzb54JWa',
    stockStatus: 'In Stock'
  },
  {
    id: '2',
    name: 'Absolute 3/2mm Full Wetsuit - Black',
    sku: 'BB-WS-32',
    brand: 'Billabong',
    category: 'Surf',
    price: 189.95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlXJuwrTjhuX86WxAsNyaqakRCWipfBdmjBfe26SGUGkCCGSza6rkDezra7de9Q1NhonRYDwiwjSTaAbCA44DACpR23QSklw-gE5Yb0ZD_KurTayH-XkqCms1uA8uPbM7Omk5-sldgRsMDAQm4br9ZkIJAvznLa2WtQfq8EHm_fcAwP0vZthGHhu8dyV_VQh20bZxxNhZLiYVO3Rd1Kah6BI8LVYaIJjwMrxo9lWIx6lAx_n19dN7h7haeppEOCvwNxzeLDUtzZuAr',
    stockStatus: 'Low Stock'
  },
  {
    id: '3',
    name: 'Old Skool Classic Sneakers',
    sku: 'VN-OS-BLK',
    brand: 'Vans',
    category: 'Apparel',
    price: 70.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXSqdM0JA0Zll5-13rGbuNtFh0IxSXqL3LF16brgbvhttdCAkTYH3-o1agQU8EPTBw_LxMe_wh8QKAgBtSmUbrWFbnbawIy_rT_sxMaRr0BDv8Q5V4RWTrpv6rH-CkosjQ3HbJnU1ofjEHWSEiBemwo6YcnIQ-iGxQX0QMs3XgpbzXF57psZ9xPwbKbYM4_TgTMpGuBuoUOVacE0ZhJMLbetO6_t9yX6hfV8BaL5VDX-GAlNG43MDu5qsDqVbylcCYw7Z50w7FDEbO',
    stockStatus: 'In Stock'
  },
  {
    id: '4',
    name: 'Formula Four 54mm 99a Wheels',
    sku: 'SP-FF-54',
    brand: 'Spitfire',
    category: 'Accessories',
    price: 45.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPAUyxvJWp4JO_P5aWAJnzwuKC_SQdzT8Rp6Ew_RcaxBIMfiqSIL4Xm2D-kDR21-hY3oK_6dQIya8TIXKHnxzWPqJxqiIGJ7O_UvarQt_KzgR2oQx1V9DBdnIAEY6kjt5_Oo3yHSinhwoKqtwKGvS7kQGosRo0PAGLRtsyK1uvJ7iJqzMMxcQ_EFZOUYZveA9Zlv4Wt7N8Kuwc_VJaCPtXPnTIs-5337EReY7Zxo5pFzWhM8fSSm-L_oq4R1fsSxTTjGkDIUAVQDUD',
    stockStatus: 'Out of Stock'
  }
];

export const MOCK_ACTIVITY: ActivityItem[] = [
  { id: '1', title: 'New Arrivals: Vans Era', description: 'Stock updated with 50 units.', time: '20 min ago', type: 'add', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1pU6ydiWWYQanu0OclaxVPtSMuA-zQGINpngzTyO8gf5D5Lf3IKPVqTFY5BEydXlvKhbX3Mux_WOjuGhNE4ttZ82I0J4BkRV1Z1ylWPmzqJkVcJ63TMCGLt-SArt_pZUgv8_IpfP9r7xz5r4TBMoQpZveDvgI3wiJPkiVWRVSzRWzH2zjmxAzk9K3YtIDuZ6DscJY9MzPDNwu8Z_m9TPDa5jDRHJxKL_r-ILzzeQXSjbrbURl9wVML0Yrcdps5_TAgxqY8lTDjRpC' },
  { id: '2', title: 'Limited Edition Surfboard', description: 'Price updated to $899.00.', time: '2 hours ago', type: 'edit', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdhfl7tk_nfy-V8LXwr0-E_SPOn7BMvb_BtYieWUE9-j1olkQz0cx3c26h3mmb-iHCZmJj41nu5JhiSCKq6LRG4Hkj6s3oAVAyFy3aS7rjf5BPOLTSepE5ANUTWIydwFD2W6OklPV0IEgYzdrYUzxjbdPROULC6Sfk8As4ZtHwH0xWuCm4xRZYDvRz4glkBaCRF8oOniLv4GX-iU_Cpot91JXsa0nUrjN7qmzZjrbgGToCePv_d95UKvi30ufH-krujYnwsXXtAf04' },
  { id: '3', title: 'New Customer', description: 'John Smith registered.', time: '4 hours ago', type: 'person' },
  { id: '4', title: 'Low Stock Alert', description: 'Graphic Tees (M) below 5 units.', time: '5 hours ago', type: 'warning', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqf3ETIeHPbVrH-VBDpSY14AjVRz58jNv1-eQAHvknkB4w6-jVUSz31jv_wpW3LXzR5uuRnt2Syrzfwfd9qCf_cfGUYET-VFLyF41HXp7k6rzXxCJUHLDWBfXaLwcdU9e3OhxkJffGzETXEo8e5eHD-zvHhjn_uxDhdhfo8neEWxb2c8qsM-XlZuv_vAjItPrCv-J5FU5bjhdsh9yMwOt7jXrLKNhWZDwtKHNhPAQOQHL78zdFYkNcOYc7wPo6y1GsEBhilYe6XntO' },
];

export const MOCK_CATEGORIES: Category[] = [
  { id: 'c1', name: 'Skateboards', description: 'Decks, trucks, and wheels', icon: 'skateboarding' },
  { id: 'c2', name: 'Longboards', description: 'Cruisers and downhill', icon: 'directions_run' },
  { id: 'c3', name: 'Surfboards', description: 'Shortboards and longboards', icon: 'surfing' },
  { id: 'c4', name: 'Wetsuits', description: 'Full suits, springs, and tops', icon: 'scuba_diving' },
  { id: 'c5', name: 'Streetwear', description: 'Tees, hoodies, and caps', icon: 'styler' },
];

export const MOCK_BRANDS: Brand[] = [
  { id: 'b1', name: 'Vans', productCount: 145, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8EEZMOOuenDAzdQXmtwn1Jp229w2JJ7ii0kz3iMmxpj7oRhLFo4nD70CytG8rtMp6DAT-w8aGKlG-u5VjtTp9QY2GasUBo5Tyzh9wctECDLTANb1W-nF7hweV21VEXiaEnpy13OZululCJ64oT6hT4mLU_QKV-fjpV4GzAwk8q6QYOt5SL7w12iub2Y85CZ5QDx3LcR0q4U6X3NReuaVGGsWPq3Zsqnp7gBI02q3ZsDVovqFJhUBX5VT98mbXbS-Wb0AdIM4Gbduw' },
  { id: 'b2', name: 'Thrasher', productCount: 82, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0phti-_EVHsK0CZeMjDP4okM3lhKHh_KlPKfm-ulY8gXkRMBKU-x5jlXQXJNw8mx58oXghXE7_ECZCkMc_g2z4JQUYZToDQmkNKn_vj1OKxAEVFoPoGezJ8X5F22v-7mVup5pO5u-esQuPvInVvtPb0wHmu3k18gzkJ-u4BoyqjGgdygZJNwoABQ5N-EQWnWuG1l1zGTO2bZSx98aEfHtgdhzqmaQnhZzQdzgScasCBF4Elx0hwIchuOpf2tFhm8zole7iyRdIKce' },
  { id: 'b3', name: 'Quiksilver', productCount: 203, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9Qle7Bx6KLSpg2KYQDyGCcDASIIIt21e7UrYo9vqdhF105kjw4ijOSh2tWpRa1FTHfUmhpc7ONCtJJEmTWc73NZALw6ev8MJ2zYgoF6zxh383tGqnXqh2uxfkDqglcVrObqocChoTmsNwV1qzl4lMLRI_RSHphTUa8H-qHT-AEA3KpOXCxSPUzMDYyWsLii9bdYr2PVAuv9pV9O5vCnrWU6EVWoZjTRvgPy2HF45gols7UIOMYu9NRneInYrh3aTpCiBYmnvGQ6l8' },
  { id: 'b4', name: 'Independent', productCount: 56, logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHjHhMMbZhAX_y3rSTI8t6auzO7RBTkY8U2MCwH1Wy_TxH7dfZ-vYiU9Bf6DlEo2NHLVPFO97Xn6vr5ORM8EY4eORIKW0sFHiQVIwu99bskSDABdgBouAjcBp2u_0BvUbaRRv7MA_ITGjS-wwbWn0ENoprGwY1shj97d_LiClMA8_l5ZA7dVXM_1TVh16iBE2mBBpKcOSboEEGQbJ1l6v6H4SJnWkBOjtdhaGkvXrYRhvhQDAjl-hgqQm008fvs1FJxMEJhIDGfrNl' },
];

export const MOCK_VARIANTS: Variant[] = [
  { id: 'v1', size: "5'10\"", finSetup: 'Thruster (FCS II)', price: 850, stockCount: 12 },
  { id: 'v2', size: "6'0\"", finSetup: 'Thruster (FCS II)', price: 850, stockCount: 2 },
  { id: 'v3', size: "6'2\"", finSetup: 'Quad / 5-Fin', price: 875, stockCount: 8 },
  { id: 'v4', size: "6'4\"", finSetup: 'Quad / 5-Fin', price: 875, stockCount: 0 },
];
