"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/registry/nextjs/components/table";
import Container from "@/registry/nextjs/components/container";
import Section from "@/registry/nextjs/components/section";
import Heading from "@/registry/nextjs/components/heading";
import Button from "@/registry/nextjs/components/button";

// Sample data
const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
  { id: "INV006", status: "Pending", method: "Bank Transfer", amount: "$200.00" },
  { id: "INV007", status: "Unpaid", method: "Credit Card", amount: "$300.00" },
];

const employees = [
  { name: "John Doe", department: "Engineering", role: "Senior Developer", salary: "$95,000" },
  { name: "Jane Smith", department: "Design", role: "Lead Designer", salary: "$85,000" },
  { name: "Mike Johnson", department: "Marketing", role: "Marketing Manager", salary: "$75,000" },
  { name: "Sarah Wilson", department: "Engineering", role: "Frontend Developer", salary: "$80,000" },
  { name: "Tom Brown", department: "Sales", role: "Sales Representative", salary: "$65,000" },
];

const products = [
  { name: "Laptop Pro", category: "Electronics", stock: 45, price: "$1,299.00", status: "In Stock" },
  { name: "Wireless Headphones", category: "Audio", stock: 23, price: "$199.00", status: "In Stock" },
  { name: "Smart Watch", category: "Wearables", stock: 0, price: "$399.00", status: "Out of Stock" },
  { name: "Gaming Mouse", category: "Accessories", stock: 67, price: "$79.00", status: "In Stock" },
  { name: "Keyboard", category: "Accessories", stock: 12, price: "$129.00", status: "Low Stock" },
];

export default function TableDemo() {
  const [selectedRows, setSelectedRows] = React.useState<string[]>([]);

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]));
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      Paid: { backgroundColor: "var(--success)", color: "white" },
      Pending: { backgroundColor: "var(--warning)", color: "white" },
      Unpaid: { backgroundColor: "var(--destructive)", color: "white" },
      "In Stock": { backgroundColor: "var(--success)", color: "white" },
      "Low Stock": { backgroundColor: "var(--warning)", color: "white" },
      "Out of Stock": { backgroundColor: "var(--destructive)", color: "white" },
    };

    return (
      <span
        style={{
          ...statusStyles[status as keyof typeof statusStyles],
          padding: "0.25rem 0.5rem",
          borderRadius: "0.25rem",
          fontSize: "0.75rem",
          fontWeight: 500,
        }}
      >
        {status}
      </span>
    );
  };

  return (
    <Container>
      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Heading fontClass="display2">Table Examples</Heading>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Basic Table - Matches Tailwind Demo */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Basic Table
              </Heading>
              <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead style={{ width: "6.25rem" }}>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.slice(0, 4).map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell style={{ fontWeight: 500 }}>{invoice.id}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>{invoice.method}</TableCell>
                      <TableCell style={{ textAlign: "right" }}>{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Interactive Table with Selection */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Interactive Table with Selection
              </Heading>
              <div style={{ marginBottom: "1rem" }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {selectedRows.length} of {invoices.length} row(s) selected.
                </p>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead style={{ width: "3rem" }}>
                      <input
                        type="checkbox"
                        checked={selectedRows.length === invoices.length}
                        onChange={() => {
                          if (selectedRows.length === invoices.length) {
                            setSelectedRows([]);
                          } else {
                            setSelectedRows(invoices.map((inv) => inv.id));
                          }
                        }}
                        style={{ margin: 0 }}
                      />
                    </TableHead>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
                    <TableHead style={{ textAlign: "right" }}>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id} data-state={selectedRows.includes(invoice.id) ? "selected" : undefined}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(invoice.id)}
                          onChange={() => toggleRow(invoice.id)}
                          style={{ margin: 0 }}
                        />
                      </TableCell>
                      <TableCell style={{ fontWeight: 500 }}>{invoice.id}</TableCell>
                      <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                      <TableCell>{invoice.method}</TableCell>
                      <TableCell style={{ textAlign: "right" }}>{invoice.amount}</TableCell>
                      <TableCell style={{ textAlign: "right" }}>
                        <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                          <Button variant="outline" style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}>
                            View
                          </Button>
                          <Button variant="outline" style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}>
                            Edit
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Employee Directory */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Employee Directory
              </Heading>
              <Table>
                <TableCaption>Company employee directory with salary information.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead style={{ textAlign: "right" }}>Salary</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div
                            style={{
                              width: "2rem",
                              height: "2rem",
                              borderRadius: "50%",
                              backgroundColor: "var(--primary)",
                              color: "var(--primary-foreground)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            {employee.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <span style={{ fontWeight: 500 }}>{employee.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell style={{ textAlign: "right", fontWeight: 500 }}>{employee.salary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3} style={{ fontWeight: 600 }}>
                      Total Employees
                    </TableCell>
                    <TableCell style={{ textAlign: "right", fontWeight: 600 }}>{employees.length}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>

            {/* Product Inventory */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Product Inventory
              </Heading>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead style={{ textAlign: "center" }}>Stock</TableHead>
                    <TableHead style={{ textAlign: "right" }}>Price</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontWeight: 500 }}>{product.name}</TableCell>
                      <TableCell>
                        <span
                          style={{
                            padding: "0.25rem 0.5rem",
                            backgroundColor: "var(--muted)",
                            borderRadius: "0.25rem",
                            fontSize: "0.75rem",
                          }}
                        >
                          {product.category}
                        </span>
                      </TableCell>
                      <TableCell style={{ textAlign: "center" }}>
                        <span
                          style={{
                            color:
                              product.stock === 0
                                ? "var(--destructive)"
                                : product.stock < 20
                                  ? "var(--warning)"
                                  : "var(--foreground)",
                          }}
                        >
                          {product.stock}
                        </span>
                      </TableCell>
                      <TableCell style={{ textAlign: "right", fontWeight: 500 }}>{product.price}</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2} style={{ fontWeight: 600 }}>
                      Total Products
                    </TableCell>
                    <TableCell style={{ textAlign: "center", fontWeight: 600 }}>
                      {products.reduce((sum, product) => sum + product.stock, 0)}
                    </TableCell>
                    <TableCell colSpan={2} style={{ fontWeight: 600 }}>
                      {products.length} items
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>

            {/* Compact Table */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Compact Table
              </Heading>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead style={{ padding: "0.25rem 0.5rem" }}>ID</TableHead>
                    <TableHead style={{ padding: "0.25rem 0.5rem" }}>Status</TableHead>
                    <TableHead style={{ padding: "0.25rem 0.5rem" }}>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.slice(0, 5).map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>{invoice.id}</TableCell>
                      <TableCell style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>{invoice.status}</TableCell>
                      <TableCell style={{ padding: "0.25rem 0.5rem", fontSize: "0.75rem" }}>{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Wide Table (Scrollable) */}
            <div>
              <Heading fontClass="title2" style={{ marginBottom: "1rem" }}>
                Wide Table (Horizontal Scroll)
              </Heading>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead style={{ minWidth: "8rem" }}>Product Name</TableHead>
                    <TableHead style={{ minWidth: "6rem" }}>SKU</TableHead>
                    <TableHead style={{ minWidth: "6rem" }}>Category</TableHead>
                    <TableHead style={{ minWidth: "6rem" }}>Brand</TableHead>
                    <TableHead style={{ minWidth: "6rem" }}>Stock</TableHead>
                    <TableHead style={{ minWidth: "6rem" }}>Price</TableHead>
                    <TableHead style={{ minWidth: "8rem" }}>Last Updated</TableHead>
                    <TableHead style={{ minWidth: "6rem" }}>Status</TableHead>
                    <TableHead style={{ minWidth: "8rem" }}>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.slice(0, 3).map((product, index) => (
                    <TableRow key={index}>
                      <TableCell style={{ fontWeight: 500 }}>{product.name}</TableCell>
                      <TableCell>SKU-00{index + 1}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>TechCorp</TableCell>
                      <TableCell>{product.stock}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>2024-10-15</TableCell>
                      <TableCell>{getStatusBadge(product.status)}</TableCell>
                      <TableCell>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <Button variant="outline" style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}>
                            Edit
                          </Button>
                          <Button variant="text" style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}>
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
