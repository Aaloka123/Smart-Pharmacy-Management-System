type AdminHeaderProps = {
  adminName: string;
};

const AdminHeader = ({ adminName }: AdminHeaderProps) => {
  return (
    <div style={styles.header}>
      <h2>Admin Dashboard</h2>

      <div style={styles.right}>
        <span>Welcome, {adminName}</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          style={styles.avatar}
        />
      </div>
    </div>
  );
};

const styles = {
  header: {
    height: "60px",
    background: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    borderRadius: "50%",
  },
};

export default AdminHeader;
