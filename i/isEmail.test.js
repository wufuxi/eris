it('check if is an email like string', function ()
{
    expect(isEmail('surunzi@foxmail.com')).to.be.true;
    expect(isEmail('surunzi')).to.be.false;
    expect(isEmail('surunzi@')).to.be.false;
});