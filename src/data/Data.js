(async () => {
    const rawResponse = await fetch('http://172.16.1.102:6060/api/v1/getdata', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fun_name:"FU_DOC_APPLICATIONS", param_name: [] , param_value:[]})
    });
  export const DOC_APPLICATIONS = await rawResponse.json();

    console.log(DOC_APPLICATIONS);
})();
(async () => {
    const rawResponsedata = await fetch('http://172.16.1.102:6060/api/v1/getdata', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fun_name:"FU_DOC_COMPONENT_TYPES", param_name: [] , param_value:[]})
    });
   export const DOC_COMPONENT_TYPES = await rawResponsedata.json();

    console.log(DOC_COMPONENT_TYPES);
})();

(async () => {
    const rawdata = await fetch('http://172.16.1.102:6060/api/v1/getdata', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fun_name:"FU_DOC_CRUD_TYPES", param_name: [] , param_value:[]})
    });
    export const DOC_CRUD_TYPES = await rawdata.json();

    console.log(DOC_CRUD_TYPES);
})();


(async () => {
    const raw = await fetch('http://172.16.1.102:6060/api/v1/getdata', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fun_name:"FU_DOC_DEPENDANCY_TYPES", param_name: [] , param_value:[]})
    });
    export const DOC_DEPENDANCY_TYPES = await raw.json();

    console.log(DOC_DEPENDANCY_TYPES);
})();

(async () => {
    const data = await fetch('http://172.16.1.102:6060/api/v1/getdata', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fun_name:"FU_DOC_SCREENS", param_name: [] , param_value:[]})
    });
    export const DOC_SCREENS = await data.json();

    console.log(DOC_SCREENS);
})();

(async () => {
    const fetchData = await fetch('http://172.16.1.102:6060/api/v1/getdata', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({fun_name:"FU_DOC_PARAM_RET_TYPES", param_name: [] , param_value:[]})
    });
    export const DOC_PARAM_RET_TYPES = await fetchData.json();

    console.log(DOC_PARAM_RET_TYPES);
})();









