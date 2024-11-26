// Created by Dejan Dojcinoski L5574493 2023
function displayUserName() {

    $.ajax({
        url: '/tm470/server/displayName.php',
        type: 'GET',
        data: {},
        success: function (userdata) {
            // Not found in db. Provide feedback to user.
            if (!userdata) {
                document.getElementById("displayname").innerHTML = "No text";
            }
            //Successfully found in db and username will be displayed.
            if (userdata) {
                document.getElementById("displayname").innerHTML = "Inloggad: " + userdata;
            }
        }
    });
};
// Created by Dejan Dojcinoski L5574493 2023
function displayAllPosts() {

    $.ajax({
        url: '/tm470/server/displayAllPosts.php',
        type: 'GET',
        data: {},
        dataType: "json",
        success: function (data) {
            //Check if there is data. 
            if (!data) {
                document.getElementById("displayAllPosts").innerHTML = "no data.";
            }
            else {
                //Create a constant to determine in which element the postings 
                //should be displayed. This element will be the parent element.
                const allPosts = document.getElementById('displayAllPosts');
                
                //Create child elements for each array
                //and append each child element to the parent element. 
                for (let i = 0; i < data.length; i++) {
                    //Create a child element for the title
                    const elemTitle = document.createElement('div');
                    allPosts.appendChild(elemTitle);
                    elemTitle.className = "border border-success rounded p-2 mb-3 h2";
                    elemTitle.append(data[i][1]);
                    //Create a child element to display the username of the 
                    //creator of the post.
                    const elemCreatedBy = document.createElement('div');
                    elemCreatedBy.className = "h4 fs-6 py-2";
                    elemCreatedBy.innerText = "Skapad av: "
                    elemTitle.appendChild(elemCreatedBy);
                    elemCreatedBy.append(data[i][0]);
                    //Create a child element for the content.
                    const elemContent = document.createElement('div');
                    elemContent.className = "fw-normal fs-6 py-3";
                    elemTitle.appendChild(elemContent);
                    elemContent.append(data[i][2]);
                    //Check if there is any data for the optional additional information
                    //If so, Create a child element for each that contains data.
                    if (!data[i][3] == " " || !data[i][4] == " " || !data[i][5] == " ") {
                        const elemUnorderedList = document.createElement('ul')
                        elemUnorderedList.className = "fw-normal fs-6 py-1";
                        elemTitle.appendChild(elemUnorderedList);
                        // Created by Dejan Dojcinoski L5574493 2023
                        if (!data[i][3] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][3]);
                        }
                        if (!data[i][4] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][4]);

                        }
                        if (!data[i][5] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][5]);
                        }
                    }
                    //Create a child element for the preferred contact option.
                    const elemContactInfo = document.createElement('div');
                    elemContactInfo.className = "fw-normal fs-6 py-2";
                    elemTitle.appendChild(elemContactInfo);
                    elemContactInfo.append(data[i][6]);
                    //Create a child element for the contact details.
                    const elemContactDetails = document.createElement('div');
                    elemContactDetails.className = "fw-normal fs-6 py-1";
                    elemTitle.appendChild(elemContactDetails);
                    elemContactDetails.append(data[i][7]);

                }
            }
        }
    });
};
// Created by Dejan Dojcinoski L5574493 2023
function displayUserPosts() {

    $.ajax({
        url: '/tm470/server/displayUserPosts.php',
        type: 'GET',
        data: {},
        dataType: "json",
        success: function (data) {
            if (!data) {
                document.getElementById("displayUserPosts").innerHTML = "no data.";
            }
            else {
                //Create a constant to determine in which element the postings 
                //should be displayed. This element will be the parent element.
                const allPosts = document.getElementById('displayUserPosts');

                //Create child elements for each array
                //and append each child element to the parent element. 
                for (let i = 0; i < data.length; i++) {
                    //Create a child element for the title.
                    const elemTitle = document.createElement('div');
                    allPosts.appendChild(elemTitle);
                    elemTitle.className = "border border-success rounded p-2 mb-3 h2";
                    elemTitle.append(data[i][1]);
                    //Create a child element for the content.
                    const elemContent = document.createElement('div');
                    elemContent.className = "fw-normal fs-6 py-3";
                    elemTitle.appendChild(elemContent);
                    elemContent.append(data[i][2]);
                    //Check if there is any data for the optional additional information
                    //If so, Create a child element for each that contains data.
                    if (!data[i][3] == " " || !data[i][4] == " " || !data[i][5] == " ") {
                        const elemUnorderedList = document.createElement('ul')
                        elemUnorderedList.className = "fw-normal fs-6 py-1";
                        elemTitle.appendChild(elemUnorderedList);

                        if (!data[i][3] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][3]);
                        }
                        if (!data[i][4] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][4]);
                        }
                        // Created by Dejan Dojcinoski L5574493 2023
                        if (!data[i][5] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][5]);
                        }
                    }
                    //Create a child element for the preferred contact option.
                    const elemContactInfo = document.createElement('div');
                    elemContactInfo.className = "fw-normal fs-6 py-2";
                    elemTitle.appendChild(elemContactInfo);
                    elemContactInfo.append(data[i][6]);
                    //Create a child element for the contact details.
                    const elemContactDetails = document.createElement('div');
                    elemContactDetails.className = "fw-normal fs-6 py-1";
                    elemTitle.appendChild(elemContactDetails);
                    elemContactDetails.append(data[i][7]);

                    //Create a child element for the delete button.
                    const buttonDiv = document.createElement('div');
                    buttonDiv.className = "col d-flex justify-content-end";
                    elemTitle.appendChild(buttonDiv);
                    //Create a delete button and set an id attribute to the button.
                    const deleteButton = document.createElement('button');
                    deleteButton.className = "btn btn-primary btn-lg";
                    deleteButton.setAttribute('id', data[i][0]); 
                    deleteButton.setAttribute('name', 'btn-delete');
                    deleteButton.setAttribute('onclick', 'deleteThisPost(this)');
                    deleteButton.innerText = "Radera Inlägg";
                    buttonDiv.appendChild(deleteButton);
                }
            }
        }
    });
};
// Created by Dejan Dojcinoski L5574493 2023
function deleteThisPost(e) {
    var postId = e.id;
    
    console.log(postId);
    //Dispalay a dialog box with a message.
    if (confirm("Är du säker på att du vill radera det här inlägget?")) {

        $.ajax({
            url: '/tm470/server/deletePost.php',
            type: 'POST',
            data: { id: postId },
            success: function (data) {
                if (data == 1) {
                    console.log("Post sucssefully deleted");
                    
                    location.reload(location.href);
                }
                else{
                    console.log("Error Post not deleted");
                }
            }
        });
    }
    else {

    }
}
// Created by Dejan Dojcinoski L5574493 2023
function displayAllPostsHideContactInfo() {

    $.ajax({
        url: '/tm470/server/displayPostsNoInfo.php',
        type: 'GET',
        data: {},
        dataType: "json",
        success: function (data) {
            //Check if there is data. 
            if (!data) {
                document.getElementById("displayAllPosts").innerHTML = "no data.";
            }
            else {
                //Create a constant to determine in which element the postings 
                //should be displayed. This element will be the parent element.
                const allPosts = document.getElementById('displayAllPosts');
                
                //Create child elements for each array
                //and append each child element to the parent element. 
                for (let i = 0; i < data.length; i++) {
                    //Create a child element for the title.
                    const elemTitle = document.createElement('div');
                    allPosts.appendChild(elemTitle);
                    elemTitle.className = "border border-success rounded p-2 mb-3 h2";
                    elemTitle.append(data[i][1]);
                    //Create a child element to display the username of the 
                    //creator of the post.
                    const elemCreatedBy = document.createElement('div');
                    elemCreatedBy.className = "h4 fs-6 py-2";
                    elemCreatedBy.innerText = "Skapad av: "
                    elemTitle.appendChild(elemCreatedBy);
                    elemCreatedBy.append(data[i][0]);
                    //Create a child element for the content.
                    const elemContent = document.createElement('div');
                    elemContent.className = "fw-normal fs-6 py-3";
                    elemTitle.appendChild(elemContent);
                    elemContent.append(data[i][2]);
                    //Check if there is any data for the optional additional information
                    //If so, Create a child element for each that contains data.
                    if (!data[i][3] == " " || !data[i][4] == " " || !data[i][5] == " ") {
                        const elemUnorderedList = document.createElement('ul')
                        elemUnorderedList.className = "fw-normal fs-6 py-1";
                        elemTitle.appendChild(elemUnorderedList);
                        // Created by Dejan Dojcinoski L5574493 2023  
                        if (!data[i][3] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][3]);
                        }  
                        if (!data[i][4] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][4]);

                        }
                        if (!data[i][5] == " ") {
                            const elemList = document.createElement('li');
                            elemList.className = "fs-6 py-1";
                            elemUnorderedList.appendChild(elemList);
                            elemList.append(data[i][5]);
                        }
                    }
                }
            }
        }
    });
};