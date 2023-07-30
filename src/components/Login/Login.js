import React from "react";
import '../Login/Login.css'

import { motion } from 'framer-motion';

const Login = () => {
    return (
        <motion.div className="form-wrapper" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </motion.div>
    )
}

export default Login