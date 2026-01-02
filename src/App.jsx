// App.jsx
import React from "react";
import AuthLayout from "./components/AuthLayout";
import AuthForm from "./components/AuthForm";

function App() {
  return (
    <div>
      {/* Put AuthForm inside AuthLayout box */}
      <AuthLayout>
        <AuthForm />
      </AuthLayout>
    </div>
  );
}

export default App;
