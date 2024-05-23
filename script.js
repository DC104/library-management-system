document.addEventListener("DOMContentLoaded", function () {
    const borrowedBooks = [
        { title: "Book 1", IssueDate: "01/02/2024", borrowedDate: "01/01/2023", fine:"0.00 rs/-" },
        { title: "Book 2", IssueDate: "01/04/2024", borrowedDate: "01/01/2023", fine: "0.00 rs/-" },
        { title: "Book 3", IssueDate: "01/07/2024", borrowedDate: "01/01/2023", fine: "0.00 rs/-" },
    ];

    const borrowedBooksTable = document.getElementById("borrowedBooksTable").getElementsByTagName("tbody")[0];
    borrowedBooks.forEach(book => {
        const row = borrowedBooksTable.insertRow();
        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.IssueDate;
        row.insertCell(2).textContent = book.borrowedDate;
        row.insertCell(3).textContent = book.fine;
    });

    // Function to handle file input change
    document.getElementById('fileInput').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profilePhoto').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    function showModalupdateProfile() {
        var modal = document.getElementById("updateProfileModal");
        if (modal) {
            modal.style.display = "block";
        }
    }

    // Function to hide the modal
    function hideModalupdateProfile() {
        var modal = document.getElementById("updateProfileModal");
        if (modal) {
            modal.style.display = "none";
        }
    }

    function showModalPayFine() {
        var modal = document.getElementById("PayFineModal");
        if (modal) {
            modal.style.display = "block";
        }
    }


    function hideModalPayFine() {
        var modal = document.getElementById("PayFineModal");
        if (modal) {
            modal.style.display = "none";
        }
    }
    
    

    function showModalIssueBook() {
        var modal = document.getElementById("IssueBookModal");
        if (modal) {
            modal.style.display = "block";
        }
    }


    function hideModalIssueBook() {
        var modal = document.getElementById("IssueBookModal");
        if (modal) {
            modal.style.display = "none";
        }
    }



    // Function to save changes
    function saveChanges() {
        var newName = document.getElementById("updateName").value;
        var username = document.getElementById("username");
        if (newName) {
            username.textContent = newName;
            hideModalupdateProfile();
        }
    }



      function PayFine() {
   // Get the selected payment method
   var paymentMethod = document.getElementById("paymentMethod").value;

// Validate if a payment method is selected
   if (paymentMethod !== "") {
    // Process payment
    alert("Your Payment is initiated!, you are requested not to refresh the page and wait for the payment page arrival ! ");
    
   } else {
    // If no payment method is selected, show an error message
    alert("Please select a payment method.");
   }
  }

  function IssueNewBook(){
  var updateBooks = document.getElementById("updateBooks").value;
  if (updateBooks != ""){
    alert("Your new book request is recorded , a conformation email is already has sent to you regarding this process , please go through the email and select your preferred book!")
  }
  else {
    alert("Please select the between the existing options");
  }
  }
  
  });






