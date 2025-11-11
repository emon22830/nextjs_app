import Navigation from "./Navigation";

export default function RootLayout({children}){
 
return (

<html lang="en">
<head>

</head>
<body>
  <p>Hello</p>
  <Navigation/>
  {children}
</body>
</html>
);
}