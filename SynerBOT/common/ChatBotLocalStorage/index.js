/**
 * Created by synerzip on 11/10/17.
 */

var React = require('react-native');
var { AsyncStorage } = React;



var PRIVATE_KEY = 'private_key:';
var CONVERSATION_LIST = 'conversation_list';
var EMP_LEAVE = 'emp_leave';
var EVENT_LIST= 'event_list';
var BIRTHDAY_LIST = 'birthday_list';
var LEAVE_TYPE_LIST = 'leave_type';
var LEAVE_BALANCE = 'leave_balance';
var MY_INFO = 'my_info';



var converter2JSON_ = function(inputPromise){
    return new Promise(function(resolve, reject){
        inputPromise.
        then((string) => resolve(JSON.parse(string))).
        catch((error) => reject(error));
    });
};

var ChatBotLocalStorage = {};


ChatBotLocalStorage.setPrivateKey = function (key) {
    return AsyncStorage.setItem(PRIVATE_KEY, JSON.stringify(key));
};

ChatBotLocalStorage.getPrivateKey = function () {
    return converter2JSON_(AsyncStorage.getItem(PRIVATE_KEY));
};


ChatBotLocalStorage.setConversationList = function (data) {
    return AsyncStorage.setItem(CONVERSATION_LIST,JSON.stringify(data));
};


ChatBotLocalStorage.getConversationList = function () {
    return converter2JSON_(AsyncStorage.getItem(CONVERSATION_LIST));
};

ChatBotLocalStorage.setEmployeeLeave = function (data) {
    return AsyncStorage.setItem(EMP_LEAVE,JSON.stringify(data));
};

ChatBotLocalStorage.getEmployeeLeave = function () {
    return converter2JSON_(AsyncStorage.getItem(EMP_LEAVE));
};


ChatBotLocalStorage.setEventList = function (data) {
    return AsyncStorage.setItem(EVENT_LIST,JSON.stringify(data));
};


ChatBotLocalStorage.getEventList = function () {
    return converter2JSON_(AsyncStorage.getItem(EVENT_LIST));
};


ChatBotLocalStorage.setBirthdayList = function (data) {
    return AsyncStorage.setItem(BIRTHDAY_LIST,JSON.stringify(data));
};


ChatBotLocalStorage.getBirthdayList = function () {
    return converter2JSON_(AsyncStorage.getItem(BIRTHDAY_LIST));
};


ChatBotLocalStorage.setLeaveTypes = function (data) {
    return AsyncStorage.setItem(LEAVE_TYPE_LIST,JSON.stringify(data));
};


ChatBotLocalStorage.getLeaveTypes = function () {
    return converter2JSON_(AsyncStorage.getItem(LEAVE_TYPE_LIST));
};

ChatBotLocalStorage.setLeaveBalance = function (data) {
    return AsyncStorage.setItem(LEAVE_BALANCE,JSON.stringify(data));
};


ChatBotLocalStorage.getLeaveBalance = function () {
    return converter2JSON_(AsyncStorage.getItem(LEAVE_BALANCE));
};

ChatBotLocalStorage.setMyInfo = function (data) {
    return AsyncStorage.setItem(MY_INFO,JSON.stringify(data));
};

ChatBotLocalStorage.getMyInfo = function () {
    return converter2JSON_(AsyncStorage.getItem(MY_INFO));
};

module.exports = ChatBotLocalStorage;