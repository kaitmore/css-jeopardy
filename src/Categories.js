import React from "react";
import Card from "./components/Card";

function Categories({ categories }) {
  return categories.map(category => <Card>{category}</Card>);
}

export default Categories;
