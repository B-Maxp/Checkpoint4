import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import Card from "../../components/Card/Card";
import "./DetailsPage.css";

function DetailsPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", image: "" });
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeapon = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/weapon/${id}`);
        if (response.ok) {
          const data = await response.json();
          setWeapon(data);
          setEditForm({ name: data.name, image: data.image });
        } else {
          toast.error("Erreur lors du chargement de l'arme");
        }
      } catch (err) {
        toast.error("Erreur réseau");
      }
    };

    if (id) {
      fetchWeapon();
    }
  }, [id]);

  const handleDeleteWeapon = async () => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer cette arme ?")) {
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/weapon/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Arme supprimée avec succès");
        navigate("/");
      } else {
        toast.error("Erreur lors de la suppression");
      }
    } catch (err) {
      toast.error("Erreur réseau");
    }
  };

  const handleUpdateWeapon = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/weapon/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      });

      if (response.ok) {
        const updatedWeapon = await response.json();
        console.log(updatedWeapon);
        setWeapon(updatedWeapon);
        setIsEditing(false);
        toast.success("Arme modifiée avec succès");
      } else {
        toast.error("Erreur lors de la modification");
      }
    } catch (err) {
      toast.error("Erreur réseau");
    }
  };

  const handleEdit = () => {
    if (weapon) {
      setEditForm({ name: weapon.name, image: weapon.image });
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (weapon) {
      setEditForm({ name: weapon.name, image: weapon.image });
    }
  };

  const handleInputChange = (field: "name" | "image", value: string) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  if (!weapon) {
    return (
      <main className="app">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    weapon && (
      <main className="app">
        <Card {...weapon} />

        {isEditing ? (
          <div className="edit-form">
            <h3>Edit weapon</h3>
            <div className="input-group">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                id="name"
                value={editForm.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Nom de l'arme"
              />
            </div>

            <div className="input-group">
              <label htmlFor="image">Image URL :</label>
              <input
                type="text"
                id="image"
                value={editForm.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
                placeholder="URL de l'image"
              />
            </div>

            <div className="button-group">
              <button
                type="button"
                onClick={handleUpdateWeapon}
                className="confirm-button"
              >
                Confirm
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="button-group">
            <button
              type="button"
              onClick={handleDeleteWeapon}
              className="delete-button"
            >
              Delete
            </button>
            <button type="button" onClick={handleEdit} className="edit-button">
              Edit
            </button>
          </div>
        )}
      </main>
    )
  );
}

export default DetailsPage;
