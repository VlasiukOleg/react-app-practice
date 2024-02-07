import "./Alert.css";

// ! Inline style

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";

//     case "error":
//       return "green";

//     case "success":
//       return "red";

//     case "warning":
//       return "orange";

//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ variant, children }) => {
//   return (
//     <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
//       {children}
//     </p>
//   );
// };

// ! Vanila CSS and compozing class

// export const Alert = ({ variant, children, outlined, elevated }) => {
//   const classNames = ["alert", variant];

//   if (outlined) classNames.push("is-outlined");
//   if (elevated) classNames.push("is-elevated");

//   return <p className={classNames.join(" ")}>{children}</p>;
// };

// ! clx

// import { clsx } from "clsx";

// export const Alert = ({ variant, children, outlined, elevated }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// ! module css

// import css from "./Alert.module.css";
// import { clsx } from "clsx";

// export const Alert = ({ variant, children, outlined, elevated }) => {
//   return <p className={clsx(css.alert, css[variant])}>{children}</p>;
// };

// ? compose

import css from "./Alert.module.css";

export const Alert = ({ variant, children, outlined, elevated }) => {
  return <p className={css[variant]}>{children}</p>;
};
