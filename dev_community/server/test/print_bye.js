const printBye = async (req, res) => {
    console.log('bye')
    res.status(200).send({ok:true, message:'test success'})
}

module.exports = {
    printBye
}