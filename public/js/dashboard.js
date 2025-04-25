
document.querySelectorAll('.delete-category-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      const id = e.target.closest('li').getAttribute('data-id');
      const response = await fetch(`/api/categories/${id}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to delete category');
      }
    });
  });

  document.querySelectorAll('.edit-category-btn').forEach(button => {
    button.addEventListener('click', async (e) => {
      const id = e.target.closest('li').getAttribute('data-id');
      const newName = prompt('Enter new category name:');
  
      if (newName) {
        const response = await fetch(`/api/categories/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ name: newName }),
          headers: { 'Content-Type': 'application/json' }
        });
  
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to update category');
        }
      }
    });
  });

  document.getElementById('category-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('category-name').value.trim();
    
    if (name) {
      const response = await fetch('/api/categories', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to add category');
      }
    }
  });
  
  