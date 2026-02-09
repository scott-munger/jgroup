# Guide de dépannage

## Le build fonctionne ✅
Le projet compile sans erreur. Si le serveur ne démarre pas, suivez ces étapes :

## 1. Redémarrer le serveur
```bash
# Arrêter tous les processus Vite
pkill -f vite

# Redémarrer le serveur
npm run dev
```

## 2. Vérifier le port
Le serveur devrait démarrer sur http://localhost:5173

