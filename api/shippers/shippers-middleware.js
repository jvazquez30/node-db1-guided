const db = require('../../data/db-config')

module.exports = {
  checkId,
  checkPayload,
}

async function checkId(req, res, next) {
  const shipper = await db('shippers').where('shipperid', req.params.id).first()
  if (!shipper) {
    next({ status: 404, message: 'that id does not exist'})
  }
}

function checkPayload(req, res, next) {
  if (!req.body.Phone || !req.body.ShipperName) {
    next ({ status: 422, message: 'Phone and Shippername are required'})
  } else {
    next()
  }
}
