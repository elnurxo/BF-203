import { useState, useEffect } from "react";
import { Table, Divider, Button } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const Suppliers = () => {
  let [suppliers, setSuppliers] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch("https://northwind.vercel.app/api/suppliers")
      .then((res) => {
        if (!res.ok) {
          throw new Error("data fetch failed!");
        }
        return res.json();
      })
      .then((data) => {
        setSuppliers(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  //columns
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      width: "30%",
    },
    {
      title: "Company Name",
      dataIndex: "companyName",
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
    },
    {
      title: "Address/City",
      dataIndex: ["address", "city"],
      filters: suppliers.map((sup) => {
        return {
          text: sup.address?.city,
          value: sup.address?.city,
        };
      }),
      onFilter: (value, record) => record?.address?.city?.indexOf(value) === 0,
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Delete",
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            fetch(`https://northwind.vercel.app/api/suppliers/${record.id}`, {
              method: "DELETE",
            });
            setSuppliers((suppliers) =>
              suppliers.filter((x) => x.id !== record.id)
            );
          }}
        >
          {"Delete"}
        </Button>
      ),
    },
  ];
  return (
    <>
      <Divider orientation="center">Suppliers Data</Divider>
      <Table
        rowKey={(record) => record.id}
        style={{ width: "88%", margin: "60px auto" }}
        columns={columns}
        dataSource={suppliers}
        onChange={onChange}
      />
    </>
  );
};
export default Suppliers;
