// App.jsx
import React from "react";
import AuthLayout from "./components/AuthLayout";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <div>
      {/* Pass AuthForm as children to AuthLayout */}
      <AuthLayout>
        <AuthForm />
      </AuthLayout>
    </div>
  );
}

export default App;
