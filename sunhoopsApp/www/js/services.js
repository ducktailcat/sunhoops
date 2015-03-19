angular.module('starter.services',[]).factory('Courts',['$http','PARSE_CREDENTIALS',function($http, PARSE_CREDENTIALS){
        return {
            getAll:function(){
            return $http.get('https://api.parse.com/1/classes/Courts',{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY
                }
            });
        },
        get:function(id){
            return $http.get('https://api.parse.com/1/classes/Courts/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY
                }
            });
        },
        create:function(data){
            return $http.post('https://api.parse.com/1/classes/Courts',data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        edit:function(id,data){
            return $http.put('https://api.parse.com/1/classes/Courts/'+id,data,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        },
        delete:function(id){
            return $http.delete('https://api.parse.com/1/classes/Courts/'+id,{
                headers:{
                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,
                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,
                    'Content-Type':'application/json'
                }
            });
        }
        };
}]).value('PARSE_CREDENTIALS',{
APP_ID: '4aIeX9u2LU0GKnrcngavqQ1nV8UIvfgPBLCcrTQX',
REST_API_KEY:'WuhLilrT9soJtUeSYVoJ5vInbkwmHRgDkzAV8R0q'
});


