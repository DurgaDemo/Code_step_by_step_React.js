// Nested list with nested Array

import React from "react";
import { Table } from "react-bootstrap";

function Array2() {
  const users = [
    {
      name: "Durga",
      email: "durga@123",
      contact: 111,
      addresss: [
        {
          Hno: 103,
          city: "Noida",
          country: "India",
        },
        {
          Hno: 105,
          city: "Gurgon",
          country: "Delhi",
        },
        {
          Hno: 108,
          city: "Faridabad",
          country: "UP",
        },
      ],
    },

    {
      name: "Mithun",
      email: "mithun@345",
      contact: 333,
      addresss: [
        {
          Hno: 103,
          city: "Noida",
          country: "India",
        },
        {
          Hno: 105,
          city: "Gurgon",
          country: "Delhi",
        },
        {
          Hno: 108,
          city: "Faridabad",
          country: "UP",
        },
      ],
    },
    {
      name: "Peter",
      email: "peter@121",
      contact: 111,
      addresss: [
        {
          Hno: 103,
          city: "Noida",
          country: "India",
        },
        {
          Hno: 105,
          city: "Gurgon",
          country: "Delhi",
        },
        {
          Hno: 108,
          city: "Faridabad",
          country: "UP",
        },
      ],
    },
    {
      name: "Peter",
      email: "peter@127",
      contact: 999,
      addresss: [
        {
          Hno: 103,
          city: "Noida",
          country: "India",
        },
        {
          Hno: 105,
          city: "Gurgon",
          country: "Delhi",
        },
        {
          Hno: 108,
          city: "Faridabad",
          country: "UP",
        },
      ],
    },
  ];

  return (
    <div>
      <h2>Nested list with nested Array</h2>

      <Table variant="dark" striped>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>

        {users.map((item,i) => {
          return (
            <tbody>
              <tr>
              <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Table variant="dark" striped>
                    <tbody>
                      {item.addresss.map((data) => {
                        return (
                          <tr>
                            <td>{data.Hno}</td>
                            <td>{data.city}</td>
                            <td>{data.country}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
}

export default Array2;
