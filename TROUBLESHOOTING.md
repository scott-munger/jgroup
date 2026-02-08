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

## 3. Vider le cache du navigateur
- Chrome/Edge: Ctrl+Shift+R (Windows) ou Cmd+Shift+R (Mac)
- Firefox: Ctrl+F5 (Windows) ou Cmd+Shift+R (Mac)
- Safari: Cmd+Option+E puis Cmd+R

## 4. Vérifier la console du navigateur
Ouvrez les outils de développement (F12) et regardez l'onglet Console pour voir les erreurs

## 5. Vérifier que tous les fichiers existent
```bash
ls -la src/context/CartContext.jsx
ls -la src/pages/Cart.jsx
ls -la src/pages/Store.jsx
```

## Structure du projet
- ✅ CartContext.jsx existe
- ✅ Cart.jsx existe  
- ✅ Store.jsx existe
- ✅ App.jsx importe CartProvider
- ✅ Tous les imports sont corrects

## Si le problème persiste
Dites-moi :
1. Quel message d'erreur exact vous voyez
2. Où ça bloque (terminal, navigateur, compilation)
3. Ce qui ne fonctionne pas (navigation, panier, affichage)
