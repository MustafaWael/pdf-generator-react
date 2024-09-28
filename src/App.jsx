import React from "react";
import PDFGenerator from "./components/PDFGenerator";
import companyOverviewTemplate from "./templates/companyOverview.pug?raw";
import invoiceTemplate from "./templates/invoice.pug?raw";
import productCatalogTemplate from "./templates/productCatalog.pug?raw";
import simpleReportTemplate from "./templates/simpleReport.pug?raw";

const App = () => {
  const companyOverviewTemplateData = {
    title: "Company Overview",
    subtitle: "Innovating for a Better Tomorrow",
    about:
      "We are a forward-thinking company dedicated to creating sustainable solutions for global challenges.",
    features: [
      "Cutting-edge Technology",
      "Sustainable Practices",
      "Global Reach",
      "Customer-Centric Approach",
    ],
    contactInfo: "Email: info@company.com | Phone: (123) 456-7890",
    footerText: "© 2024 Your Company Name. All rights reserved.",
  };
  
  const invoiceTemplateData = {
    invoiceNumber: 12345,
    clientName: "John Doe",
    clientAddress: "123 Elm Street\nSpringfield, IL 62701",
    invoiceDate: new Date().toLocaleDateString(),
    dueDate: new Date(
      new Date().setDate(new Date().getDate() + 30)
    ).toLocaleDateString(),
    items: [
      { description: "Web Development Services", quantity: 10, unitPrice: 50 },
      { description: "Graphic Design Services", quantity: 5, unitPrice: 70 },
      { description: "Hosting Fees", quantity: 1, unitPrice: 120 },
    ],
    total: function () {
      return this.items.reduce(
        (sum, item) => sum + item.quantity * item.unitPrice,
        0
      );
    },
  };
  
  const productCatalogTemplateData = {
    companyName: "Tech Gadgets Inc.",
    contactEmail: "info@techgadgets.com",
    products: [
      {
        name: "Smartphone X1",
        description: "Latest model with high-speed performance and sleek design.",
        price: 799.99,
        imageUrl: "https://example.com/images/smartphone-x1.jpg",
      },
      {
        name: "Wireless Headphones",
        description: "Noise-cancelling headphones with superior sound quality.",
        price: 199.99,
        imageUrl: "https://example.com/images/wireless-headphones.jpg",
      },
      {
        name: "4K Ultra HD TV",
        description: "Immerse yourself in stunning picture quality.",
        price: 1499.99,
        imageUrl: "https://example.com/images/4k-tv.jpg",
      },
      {
        name: "Laptop Pro 15",
        description: "Powerful laptop for professionals and gamers alike.",
        price: 1299.99,
        imageUrl: "https://example.com/images/laptop-pro-15.jpg",
      },
      {
        name: "Smartwatch V2",
        description: "Stylish smartwatch with health tracking features.",
        price: 249.99,
        imageUrl: "https://example.com/images/smartwatch-v2.jpg",
      },
      {
        name: "Portable Charger",
        description: "High-capacity portable charger for on-the-go convenience.",
        price: 39.99,
        imageUrl: "https://example.com/images/portable-charger.jpg",
      },
    ],
  };
  
  const simpleReportTemplatetData = {
    reportTitle: "Monthly Sales Report - September 2024",
    generationDate: new Date().toLocaleDateString(),
    executiveSummary:
      "This report provides an overview of sales performance for September 2024, highlighting key metrics and detailed analysis.",
    keyMetrics: [
      { name: "Total Sales", value: "$150,000" },
      { name: "New Customers", value: "200" },
      { name: "Customer Retention Rate", value: "85%" },
      { name: "Average Order Value", value: "$75" },
    ],
    detailedAnalysis: [
      {
        title: "Sales Growth",
        content:
          "Sales have increased by 15% compared to August 2024, driven by a successful marketing campaign.",
      },
      {
        title: "Customer Feedback",
        content:
          "Customer feedback has improved with a satisfaction score of 92% this month.",
      },
      {
        title: "Product Performance",
        content:
          "The top-selling product was the XYZ gadget, accounting for 40% of total sales.",
      },
    ],
    conclusion:
      "Overall, September was a successful month for sales, with growth in multiple areas and positive customer feedback.",
    preparedBy: "Alex Johnson, Sales Manager",
    contactInfo: "alex.johnson@company.com",
  
    // Chart Data
    chartData: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      data: [5000, 7000, 6000, 8000],
    },
  };

  return (
    <div>
      <h1>PDF Generator Examples</h1>
      <h2>Company Overview</h2>
      <PDFGenerator template={companyOverviewTemplate} data={companyOverviewTemplateData} fileName="company_overview.pdf" />
      <h2>Invoice</h2>
      <PDFGenerator template={invoiceTemplate} data={{
        ...invoiceTemplateData,
        total: invoiceTemplateData.total(),
        
      }} fileName="invoice.pdf" />
      <h2>Product Catalog</h2>
      <PDFGenerator template={productCatalogTemplate} data={productCatalogTemplateData} fileName="product_catalog.pdf" />
      <h2>Simple Report</h2>
      <PDFGenerator template={simpleReportTemplate} data={simpleReportTemplatetData} fileName="simple_report.pdf" />
    </div>
  );
};

export default App;
