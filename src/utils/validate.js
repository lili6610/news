/**
 * Created by jiachenpan on 16/11/18.
 */

export function isvalidUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
// 验证账号
export const checkUserName = (t, o, p,d) => (rule, value, callback) => {
  t && (t[o][p] = false)
  if (value === '') {
    callback(new Error(d?d:'请输入手机号或邮箱'))
  } else {
    callback()
    t && (t[o][p] = true)
  }
}
// 验证账号密码
export const checkPassWord = (t, o, p) => (rule, value, callback) => {
  t && (t[o][p] = false)
  let checkTest = /^(\w){6,16}$/
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (!checkTest.test(value)) {
      callback(new Error('6~16位字符，仅限字母、数字、下划线'))
    } else {
      callback()
      t && (t[o][p] = true)
    }
  }
}
// 验证手机号
export const checkPhone = (t, o, p) => (rule, value, callback) => {
  t && (t[o][p] = false)
  let checkTest = /^13[\d]{9}$|^14[5,6,7,8,9]{1}\d{8}$|^15[^4]{1}\d{8}$|^16[6]{1}\d{8}$|^17[0,1,2,3,4,5,6,7,8]{1}\d{8}$|^18[\d]{9}$|^19[8,9]{1}\d{8}$/
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else {
    if (!checkTest.test(value)) {
      callback(new Error('请输入正确的手机号'))
    } else {
      callback()
      t && (t[o][p] = true)
    }
  }
}

// 验证手机验证码
export const checkCode = (t, o, p) => (rule, value, callback) => {
  t && (t[o][p] = false)
  let checkTest = /^\d{4}$/
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else {
    if (!checkTest.test(value)) {
      callback(new Error('请输入正确的验证码'))
    } else {
      callback()
      t && (t[o][p] = true)
    }
  }
}

// 验证邮箱
export const checkEmail = (options) => (rule, value, callback) => {
  let checkTest = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,5}(\.[a-z]{2,5})?)$/
  if (value === '') {
    // callback(new Error('请输入邮箱'))
    callback(new Error(options.error?options.error(value):'请输入邮箱'))
  } else {
    if (!checkTest.test(value)) {
      // callback(new Error('请输入正确的邮箱'))
      callback(new Error(options.error?options.error(value):'请输入正确的邮箱'))
    } else {
      callback()
    }
  }
}
