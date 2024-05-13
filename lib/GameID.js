var config = require('../config');

function GetGameID(productName)
{
    return config[productName];
}

exports.GetGameID = GetGameID;