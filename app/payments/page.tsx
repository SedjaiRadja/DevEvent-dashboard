import DataTable from "./data-table"
import {columns} from "./columns"
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    user: "Mohamed Amine",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    user: "Yacine B.",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "a1b2c3d4",
    user: "Sara Benali",
    amount: 250,
    status: "success",
    email: "john.doe@gmail.com",
  },
  {
    id: "e5f6g7h8",
    user: "Imad K.",
    amount: 75,
    status: "failed",
    email: "sarah@example.com",
  },
  {
    id: "i9j0k1l2",
    user: "Nour El Houda",
    amount: 500,
    status: "pending",
    email: "alex@gmail.com",
  },
  {
    id: "m3n4o5p6",
    user: "Aymen M.",
    amount: 320,
    status: "processing",
    email: "emma@example.com",
  },
  {
    id: "q7r8s9t0",
    user: "Lina B.",
    amount: 150,
    status: "success",
    email: "michael@gmail.com",
  },
  {
    id: "u1v2w3x4",
    user: "Sofiane K.",
    amount: 90,
    status: "failed",
    email: "olivia@example.com",
  },
  {
    id: "y5z6a7b8",
    user: "Rania D.",
    amount: 410,
    status: "pending",
    email: "david@gmail.com",
  },
  {
    id: "c9d0e1f2",
    user: "Walid A.",
    amount: 200,
    status: "success",
    email: "jessica@example.com",
  },
  {
    id: "g3h4i5j6",
    user: "Yasmine T.",
    amount: 640,
    status: "processing",
    email: "robert@gmail.com",
  },
  {
    id: "k7l8m9n0",
    user: "Karim H.",
    amount: 85,
    status: "failed",
    email: "sophia@example.com",
  },
]

const PaymentPage = () =>{
  return (
<div className="">
  <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
    <h1 className="font-semibold">All Payments</h1>
  </div>
  <DataTable columns={columns} data={payments} />
</div>
  );
}
export default PaymentPage;