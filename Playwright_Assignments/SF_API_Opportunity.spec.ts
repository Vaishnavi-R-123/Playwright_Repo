// API TESTING USING SALESFORCE for  Create, Fetch, Update & Delete the Opportunity details

import test,{expect} from '@playwright/test'

let accessToken:any
let InstanceUrl:any
let id:any

test("Token Generation", async({request})=>{

const reqToken= await request.post('https://login.salesforce.com/services/oauth2/token',{

    headers:
    {
        "Content-Type":"application/x-www-form-urlencoded"
    },

    form:
    {
        "grant_type":"password",
        "username":"gauthami.vn@testleaf.com",
        "password":"Testleaf@2026",
        "client_id":"3MVG9rZjd7MXFdLhTFd7jYNtTiu5DzDqdNCte5DvFnv7tbIspjQ9CGPizYGUq7h6T69VSmfqxT9yY2NS7tz84",
        "client_secret":"09FE1EF4BDD93B17821073243A441F8A780A639C21D925B575C1112A3F5E0DBE"
    }
})

const res=await reqToken.json()
accessToken=res.access_token
InstanceUrl=res.instance_url

console.log(accessToken +" "+InstanceUrl)

})

test("Create Opportunity",async({request})=>{

    const response =await request.post(`${InstanceUrl}/services/data/v59.0/sobjects/Opportunity`,{

        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${accessToken}`

        },

        data:{

            "Name": "Opportunity_Vaishnavi_1",
            "CloseDate":"2025-03-15",
            "StageName":"Prospecting"
        }
    })

    const res=await response.json()
    id = res.id
    console.log(id)
})

test("Fetch the Opportunity", async({request})=>{

const response = await request.get(`${InstanceUrl}/services/data/v59.0/sobjects/Opportunity/${id}`,{

headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${accessToken}`
}

})

const get_response = await response.json()   
console.log(get_response)

const expectedName = get_response.Name
expect(expectedName).toBe("Opportunity_Vaishnavi_1")

})

test("Update the Opportunity", async({request})=>{

const response = await request.patch(`${InstanceUrl}/services/data/v59.0/sobjects/Opportunity/${id}`,{

headers:{

    "Content-Type":"application/json",
    "Authorization":`Bearer ${accessToken}`

},
data:{

    "StageName":"Prospecting",
    "Type":"New Customer"
    
}

})

})

test("Fetch the Updated Opportunity", async({request})=>{

const response = await request.get(`${InstanceUrl}/services/data/v59.0/sobjects/Opportunity/${id}`,{

headers:{
    "Content-Type":"application/json",
    "Authorization":`Bearer ${accessToken}`
}

})

const get_response1 = await response.json()   
console.log(get_response1)

const expectedName = get_response1.Name
expect(expectedName).toBe("Opportunity_Vaishnavi_1")

})

test("Delete Opportunity", async({request})=>{

const response = await request.delete(`${InstanceUrl}/services/data/v59.0/sobjects/Opportunity/${id}`,{

    headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${accessToken}`
    }
})
const delete_sts= response.status()
expect(delete_sts).toEqual(204)

})

