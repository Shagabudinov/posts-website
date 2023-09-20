import React from "react";
import { Link, LinkProps } from "react-router-dom";
import "./Button.css"
import { NoUnderlineLinkProps } from "../appTypes.ts/types";

export const NoUnderlineLink: React.FC<NoUnderlineLinkProps> = ({ to, children, customClassName }) => (
    <Link to={to} className={customClassName}>
      {children}
    </Link>
  );

const Button = (props: { text: string; id: string }) => {
    return (
        <React.Fragment>
            <NoUnderlineLink to={props.id} customClassName="button-read-next__text">{props.text}</NoUnderlineLink>
        </React.Fragment>
    );
};

export default Button;
