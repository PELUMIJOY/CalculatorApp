import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import "./Calculator.css";

const Calculator = () => {
  const [expression, setExpression] = useState("0");

  const endsWithOperator = (str) => /[+\-*/]$/.test(str);
  const hasDecimal = (str) => /\.\d*$/.test(str);
  const endsWithNumber = (str) => /\d$/.test(str);

  const addToExpression = (value) => {
    const lastChar = expression[expression.length - 1];
   
    if (
      value === "+" ||
      value === "-" ||
      value === "*" ||
      value === "÷" ||
      value === "%" ||
      value === "±"
    ) {
      if (endsWithOperator(expression)) return;
      if (expression === "0") return;
    }
    if (
      (value === "+" || value === "-" || value === "*" || value === "÷") &&
      !endsWithNumber(expression) &&
      lastChar !== "."
    ) {
      return;
    }

    if (value === "." && hasDecimal(expression)) {
      return;
    }

    if (value === "%" && (!endsWithNumber(expression) || lastChar === "%")) {
      return;
    }

    if (value === "±" && (lastChar === "±" || expression.endsWith("±±"))) {
      return;
    }
  
    setExpression((prevExpression) =>
      prevExpression === "0" ? value : prevExpression + value
    );
  };

  const clearExpression = () => {
    setExpression("0");
  };

  const calculateExpression = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display-container">
        <Input className="display" value={expression} disabled />
      </div>
      <div className="buttons-container">
        <Row gutter={8}>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "rgba(64, 61, 56, 0.8)" }}
              onClick={clearExpression}
            >
              AC
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "rgba(64, 61, 56, 0.8)" }}
              onClick={() => addToExpression("±")}
            >
              ±
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "rgba(64, 61, 56, 0.8)" }}
              onClick={() => addToExpression("%")}
            >
              %
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "#ff9f0c" }}
              onClick={() => addToExpression("÷")}
            >
              ÷
            </Button>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("7")}>
              7
            </Button>
          </Col>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("8")}>
              8
            </Button>
          </Col>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("9")}>
              9
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "#ff9f0c" }}
              onClick={() => addToExpression("*")}
            >
              x
            </Button>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("4")}>
              4
            </Button>
          </Col>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("5")}>
              5
            </Button>
          </Col>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("6")}>
              6
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "#ff9f0c" }}
              onClick={() => addToExpression("-")}
            >
              -
            </Button>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("1")}>
              1
            </Button>
          </Col>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("2")}>
              2
            </Button>
          </Col>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression("3")}>
              3
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "#ff9f0c" }}
              onClick={() => addToExpression("+")}
            >
              +
            </Button>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <Button className="button" onClick={() => addToExpression("0")}>
              0
            </Button>
          </Col>
          <Col span={6}>
            <Button className="button" onClick={() => addToExpression(".")}>
              .
            </Button>
          </Col>
          <Col span={6}>
            <Button
              className="button"
              style={{ backgroundColor: "#ff9f0c" }}
              onClick={calculateExpression}
            >
              =
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Calculator;
