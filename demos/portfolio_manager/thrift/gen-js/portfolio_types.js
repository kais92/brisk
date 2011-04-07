//
// Autogenerated by Thrift
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
Stock = function(args){
this.ticker = ''
this.price = 0.0
if( args != null ){if (null != args.ticker)
this.ticker = args.ticker
if (null != args.price)
this.price = args.price
}}
Stock.prototype = {}
Stock.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
  var ret = input.readFieldBegin()
  var fname = ret.fname
  var ftype = ret.ftype
  var fid   = ret.fid
  if (ftype == Thrift.Type.STOP) 
    break
  switch(fid)
  {
    case 1:    if (ftype == Thrift.Type.STRING) {
      var rtmp = input.readString()
this.ticker = rtmp.value
    } else {
      input.skip(ftype)
    }
    break
    case 2:    if (ftype == Thrift.Type.DOUBLE) {
      var rtmp = input.readDouble()
this.price = rtmp.value
    } else {
      input.skip(ftype)
    }
    break
    default:
      input.skip(ftype)
  }
  input.readFieldEnd()
}
input.readStructEnd()
return
}

Stock.prototype.write = function(output){ 
output.writeStructBegin('Stock')
if (null != this.ticker) {
  output.writeFieldBegin('ticker', Thrift.Type.STRING, 1)
  output.writeString(this.ticker)
  output.writeFieldEnd()
}
if (null != this.price) {
  output.writeFieldBegin('price', Thrift.Type.DOUBLE, 2)
  output.writeDouble(this.price)
  output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Portfolio = function(args){
this.name = ''
this.constituents = []
this.price = 0.0
if( args != null ){if (null != args.name)
this.name = args.name
if (null != args.constituents)
this.constituents = args.constituents
if (null != args.price)
this.price = args.price
}}
Portfolio.prototype = {}
Portfolio.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
  break
switch(fid)
{
  case 1:  if (ftype == Thrift.Type.STRING) {
    var rtmp = input.readString()
this.name = rtmp.value
  } else {
    input.skip(ftype)
  }
  break
  case 2:  if (ftype == Thrift.Type.LIST) {
    {
      var _size0 = 0
      var rtmp3
      this.constituents = []
      var _etype3 = 0
      rtmp3 = input.readListBegin()
      _etype3 = rtmp3.etype
      _size0 = rtmp3.size
      for (var _i4 = 0; _i4 < _size0; ++_i4)
      {
        var elem5 = null
        elem5 = new Stock()
        elem5.read(input)
        this.constituents.push(elem5)
      }
      input.readListEnd()
    }
  } else {
    input.skip(ftype)
  }
  break
  case 3:  if (ftype == Thrift.Type.DOUBLE) {
    var rtmp = input.readDouble()
this.price = rtmp.value
  } else {
    input.skip(ftype)
  }
  break
  default:
    input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Portfolio.prototype.write = function(output){ 
output.writeStructBegin('Portfolio')
if (null != this.name) {
output.writeFieldBegin('name', Thrift.Type.STRING, 1)
output.writeString(this.name)
output.writeFieldEnd()
}
if (null != this.constituents) {
output.writeFieldBegin('constituents', Thrift.Type.LIST, 2)
{
  output.writeListBegin(Thrift.Type.STRUCT, this.constituents.length)
  {
    for(var iter6 in this.constituents)
    {
      iter6=this.constituents[iter6]
      iter6.write(output)
    }
  }
  output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.price) {
output.writeFieldBegin('price', Thrift.Type.DOUBLE, 3)
output.writeDouble(this.price)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

LeaderBoard = function(args){
this.low_var = []
this.high_var = []
if( args != null ){if (null != args.low_var)
this.low_var = args.low_var
if (null != args.high_var)
this.high_var = args.high_var
}}
LeaderBoard.prototype = {}
LeaderBoard.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.LIST) {
  {
    var _size7 = 0
    var rtmp3
    this.low_var = []
    var _etype10 = 0
    rtmp3 = input.readListBegin()
    _etype10 = rtmp3.etype
    _size7 = rtmp3.size
    for (var _i11 = 0; _i11 < _size7; ++_i11)
    {
      var elem12 = null
      elem12 = new Portfolio()
      elem12.read(input)
      this.low_var.push(elem12)
    }
    input.readListEnd()
  }
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.LIST) {
  {
    var _size13 = 0
    var rtmp3
    this.high_var = []
    var _etype16 = 0
    rtmp3 = input.readListBegin()
    _etype16 = rtmp3.etype
    _size13 = rtmp3.size
    for (var _i17 = 0; _i17 < _size13; ++_i17)
    {
      var elem18 = null
      elem18 = new Portfolio()
      elem18.read(input)
      this.high_var.push(elem18)
    }
    input.readListEnd()
  }
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

LeaderBoard.prototype.write = function(output){ 
output.writeStructBegin('LeaderBoard')
if (null != this.low_var) {
output.writeFieldBegin('low_var', Thrift.Type.LIST, 1)
{
output.writeListBegin(Thrift.Type.STRUCT, this.low_var.length)
{
  for(var iter19 in this.low_var)
  {
    iter19=this.low_var[iter19]
    iter19.write(output)
  }
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.high_var) {
output.writeFieldBegin('high_var', Thrift.Type.LIST, 2)
{
output.writeListBegin(Thrift.Type.STRUCT, this.high_var.length)
{
  for(var iter20 in this.high_var)
  {
    iter20=this.high_var[iter20]
    iter20.write(output)
  }
}
output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

