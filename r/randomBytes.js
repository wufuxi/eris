/* Random bytes generator.
 *
 * Use crypto module in node or crypto object in browser if possible.
 *
 * |Name  |Type  |Desc                        |
 * |------|------|----------------------------|
 * |size  |number|Number of bytes to generate |
 * |return|object|Random bytes of given length|
 *
 * ```javascript
 * randomBytes(5); // -> [55, 49, 153, 30, 122]
 * ```
 */

_('random');

var crypto;

if (typeof window === 'object')
{
    crypto = window.crypto || window.msCrypto;

    if (crypto)
    {
        exports = function (size)
        {
            var ret = new Uint8Array(size);

            crypto.getRandomValues(ret);

            return ret;
        };
    }
} else
{
    crypto = require('crypto');

    exports = function (size)
    {
        return crypto.randomBytes(size);
    };
}

exports = exports || function (size)
{
    var ret = new Uint8Array(size);

    for (var i = 0; i < size; i++) ret[i] = random(0, 255);

    return ret;
};