import React from "react"
import { Route, Routes } from "react-router-dom"
import { ForgotPasswordScreen, HomeScreen, LogginScreen, RecoveryPasswordScreen, RegisterScreen, ValidacionEmailScreen } from "./Screens"
import ProductDetailsScreen from "./Screens/ProductDetailsScreen"
import CreateProductScreen from "./Screens/CreateProductScreen"
import ProtectedRoute from "./Componets/ProtectedRoute"

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LogginScreen />} />
                <Route path="/login" element={<LogginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
                <Route path="/auth/recovery-password/:reset_token" element={<RecoveryPasswordScreen />} />
                <Route path="/validacion-email" element={<ValidacionEmailScreen />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/products/:product_id" element={<ProductDetailsScreen />} />
                    <Route path="/create-product" element={<CreateProductScreen />} />
                </Route>
            </Routes>
        </div>
    )
}
export default App