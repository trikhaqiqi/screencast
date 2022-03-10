import React, { Component } from 'react'

export class Bot extends Component{

    componentDidMount() {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"3217c59a0c716a0987512276328914d90","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Bot