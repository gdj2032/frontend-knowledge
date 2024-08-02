// ### 3.16 职责链模式 Chain of Responsibility Pattern
/**
 * 职责链模式实现电商优惠劵发放
 * 一个售卖手机的电商网站：针对预定用户实行优惠，支付过500元定金的用户会收到100元的商城优惠券，支付过200元定金的用户会收到50元的商城优惠券，没有支付定金的用户归为普通购买，且在库存有限的情况下不一定保证买到。
 *
 * orderType：表示订单类型（定金用户或者普通购买用户），code的值为1的时候是500元定金用户，为2的时候是200元定金用户，为3的时候是普通购买用户。
 * pay：表示用户是否已经支付定金，值为true或者false，虽然用户已经下过500元定金的订单，但如果他一直没有支付定金，现在只能降级进入普通购买模式。
 * stock：表示当前用于普通购买的手机库存数量，已经支付过500元或者200元定金的用户不受此限制。
 */

var order500 = function(orderType, isPaid, stock) {
  if(orderType === 1 && isPaid === true) {
    console.log("500元定金预购，得到100优惠券");
  }else {
    return "nextSuccessor";
  }
};
​
var order200 = function(orderType, isPaid, stock) {
  if(orderType === 2 && isPaid === true) {
    console.log("200元定金预购，得到50优惠券");
  }else {
    return "nextSuccessor";
  }
};
​
var orderNormal = function(orderType, isPaid, stock) {
  if(stock > 0) {
    console.log("普通购买，无优惠券");
  }else {
    console.log("库存不足");
  }
};
​
Function.prototype.after = function(fn) {
  var self = this;
  return function() {
    var ret = self.apply(this, arguments);
    if(ret === "nextSuccessor") {
      return fn.apply(this, arguments);
    }
    return ret;
  };
}
​
var order = order500.after(order200).after(orderNormal);
order(1, true, 10);
