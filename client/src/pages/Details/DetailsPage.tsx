import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Card from "../../components/Card/Card";
import { toast } from "react-toastify";
import "./DetailsPage.css";

function DetailsPage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${apiUrl}/api/weapon/${id}`)
      .then((res) => res.json())
      .then((data) => setWeapon(data));
  }, [id]);

  const handleDeleteWeapon = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/weapon/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Weapon successfully deleted");
        navigate("/");
      } else {
        toast.error("Error when deleting weapon");
      }
    } catch (err) {
      toast.error("Network error");
    }
  };

  const handleUpdateWeapon = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/weapon/${id}`, {
        method: "PUT",
      });

      if (response.ok) {
        toast.success("Weapon successfully modified");
      } else {
        toast.error("Error when modifying the weapon");
      }
    } catch (err) {
      toast.error("Network error");
    }
  };

  return (
    weapon && (
      <main className="app">
        <div className="action-buttons">
          <Card {...weapon} />
          <button
            type="button"
            onClick={handleDeleteWeapon}
            className="delete-button"
          >
            Supprimer
          </button>
          <button
            type="button"
            onClick={handleUpdateWeapon}
            className="edit-button"
          >
            Modifier
          </button>
        </div>
      </main>
    )
  );
}

export default DetailsPage;
