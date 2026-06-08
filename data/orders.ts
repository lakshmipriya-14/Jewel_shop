import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export type OrderItem = {
  productId: string;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
};

export type OrderShipping = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
};

export type Order = {
  id: string;
  date: string; // display format
  status: string;
  items: OrderItem[];
  total: number;
  shippingAddress: OrderShipping;
  paymentMethod: string;
  estimatedDelivery: string; // display format
};

export const mockOrders: Order[] = [
  {
    id: "VS10234",
    date: "12 Nov 2024",
    status: "Delivered",
    estimatedDelivery: "14 Nov 2024",
    total: 3850,
    items: [
      {
        productId: "SIL-ANQ-001",
        productName: "Classic Silver Anklets",
        productImage: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=700&q=80",
        quantity: 1,
        price: 2150,
      },
      {
        productId: "SIL-CHN-012",
        productName: "Minimal Silver Chain",
        productImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=700&q=80",
        quantity: 1,
        price: 1700,
      },
    ],
    shippingAddress: {
      name: "Priya Sharma",
      phone: "+91 98765 43210",
      addressLine1: "12/4, Ramalinga Nagar",
      addressLine2: "Near Govt School",
      city: "Madurai",
      state: "Tamil Nadu",
      pincode: "625017",
    },
    paymentMethod: "Cash on Delivery",
  },
  {
    id: "VS10198",
    date: "28 Oct 2024",
    status: "Shipped",
    estimatedDelivery: "02 Nov 2024",
    total: 1650,
    items: [
      {
        productId: "SIL-RNG-043",
        productName: "Twist Silver Ring",
        productImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=80",
        quantity: 1,
        price: 1650,
      },
    ],
    shippingAddress: {
      name: "Deepika Menon",
      phone: "+91 91234 56780",
      addressLine1: "27, 3rd Cross Street",
      addressLine2: "Anna Nagar",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560040",
    },
    paymentMethod: "UPI",
  },
  {
    id: "VS10145",
    date: "5 Oct 2024",
    status: "Delivered",
    estimatedDelivery: "08 Oct 2024",
    total: 5200,
    items: [
      {
        productId: "SIL-ER-021",
        productName: "Jhumka Silver Earrings",
        productImage: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=700&q=80",
        quantity: 1,
        price: 2400,
      },
      {
        productId: "SIL-PEN-008",
        productName: "Round Pendant with Shine",
        productImage: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&q=80",
        quantity: 2,
        price: 1400,
      },
    ],
    shippingAddress: {
      name: "Ananya Krishnan",
      phone: "+91 99887 77665",
      addressLine1: "88, Lake View Road",
      addressLine2: "Near Temple",
      city: "Coimbatore",
      state: "Tamil Nadu",
      pincode: "641001",
    },
    paymentMethod: "Card (Rupay) - **** 4821",
  },
];

export function getOrderById(id: string): Order | undefined {
  return mockOrders.find((o) => o.id === id);
}

