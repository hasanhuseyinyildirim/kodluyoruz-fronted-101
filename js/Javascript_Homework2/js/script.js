    
function newElement() 
{
     const inputValue = document.getElementById("task").value.trim(); // Görev girdisini al ve baştaki ve sondaki boşlukları kaldır

    if (inputValue === "") 
    {   
        // Görev girdisi boşsa
      showToastError(); // Hata tostunu göster
    } 
    else 
    {   
        // Görev girdisi doluysa
      addTaskToList(inputValue); // Görevi listeye ekle
      showToastSuccess(); // Başarı tostunu göster
    }  
    // Formu temizle
    document.getElementById("task").value = "";
}
 
    // Listeye görev ekleme işlevi
    function addTaskToList(task) 
    {
        let list = document.getElementById("list"); // Liste öğesini seç
        let listItem = document.createElement("li"); // Yeni bir liste öğesi oluştur
        listItem.textContent = task; // Liste öğesinin içeriğini belirle
        // "x" simgesini içeren bir span öğesi oluştur
        let deleteButton = document.createElement("span");
        deleteButton.textContent = "×";
        deleteButton.classList.add("close"); // "close" sınıfını ekle

        // "x" simgesini liste öğesine ekle
        listItem.appendChild(deleteButton);

        list.appendChild(listItem); // Liste öğesini listeye ekle
    }

    // Liste öğesini işaretleme fonksiyonu
    let checklist = document.querySelector('ul');
    checklist.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
    });
    
    document.addEventListener("DOMContentLoaded", function () 
{
    // Enter tuşuna basıldığında 
    document.getElementById("task").addEventListener("keydown", function(event) 
    {
      if (event.keyCode === 13) // Enter tuşu kodu
      { 
        event.preventDefault(); // Sayfanın kaymasını engelle
        newElement(); // Yeni öğe ekle
      }
    });
});
    
  
    // Tost bildirimini gösterme işlevi
    function showToast(toastType) {
        let toast = document.querySelector(".toast." + toastType); // Tost öğesini seç
        let bsToast = new bootstrap.Toast(toast); // Bootstrap Toast nesnesini oluştur
        bsToast.show(); // Tostu göster
    }
    
    // Başarı tostunu gösterme işlevi
    function showToastSuccess() {
        showToast("success");
    }
    
    // Hata tostunu gösterme işlevi
    function showToastError() {
        showToast("error");
    }

    function deleteTask(event) {
        var listItem = event.target.closest("li"); // Tıklanan öğeyi bul
        listItem.remove(); // Öğeyi listeden kaldır
    }
    // "x" simgesine tıklama 
    document.getElementById("list").addEventListener("click", function (event) {
        if (event.target.classList.contains("close")) {
        // Tıklanan öğe "x" simgesi ise
        deleteTask(event); // Öğeyi sil
        }
    });
    