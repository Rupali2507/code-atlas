const healthCheck = (req,res)=>{
    res.status(200).json({
        status: 'ok',
        message: 'Code Atlas backend is running'
    })
}

export default healthCheck;