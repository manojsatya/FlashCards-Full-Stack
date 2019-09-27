import React from "react";
import Card from "./Card";

export default {
  title: "Card"
};

export const card = () => (
  <Card
    title="test"
    question="test"
    answer="answer"
    tags={["one", "two"]}
  ></Card>
);
