# 🧩 Simple DNS Server (TypeScript + Node.js)

This is a **basic DNS server** implementation in TypeScript using Node.js.  
It listens on **UDP port 53** and serves DNS records from an in-memory database.

---

## 🚀 Features
- Supports multiple record types: `A`, `AAAA`, `CNAME`, `MX`, `NS`, `TXT`, `SRV`, `PTR`.
- Handles multiple records per domain.
- Responds to queries with authoritative answers.
- Written in **TypeScript** with `dns-packet` and `dgram`.

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/fasilv843/Trace53.git
cd Trace53

# Install dependencies
npm install

# Start the server
npm run dev
```

## 📦 Requirements

- **node and npm**
- **dig** (command-line DNS client)

### Installing `dig`
- **Linux (Debian/Ubuntu):**
  ```bash
  sudo apt update && sudo apt install dnsutils -y
  ```

- **macOS (Homebrew):**
  ```bash
  brew install bind
  ```
  
- **Windows:**
  ```bash
  choco install bind-toolsonly 
  ```
*After installation, verify with:* 
```bash
dig -v
```

## Testing on Localhost

```bash
dig `@localhost johndoe.dev A
```

## 📚 References

- [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)  
- [Build Your Own DNS Server - Beginner Friendly](https://youtu.be/Ui66W7zeAbI)  ✅
- [Build Your Own DNS Server](https://youtu.be/52wnTsBI_HE)  - Not Implemented



