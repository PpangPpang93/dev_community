const printHello = async (req, res) => {
    console.log('hello')
    res.status(200).send({ok:true, message:'test success'})
}

module.exports = {
    printHello
}