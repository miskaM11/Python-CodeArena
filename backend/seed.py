from db import init_db, seed_db
 
 
def main():
    init_db()
    seed_db()
    print("Database initialized and seeded successfully.")
 
 
if __name__ == "__main__":
    main()