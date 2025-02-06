import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
  description: "Create a new invoice",
};

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          { label: "Create", href: "/dashboard/invoices/create", active: true },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
