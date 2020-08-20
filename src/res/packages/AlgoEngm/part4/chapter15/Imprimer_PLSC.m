function [] = Imprimer_PLSC(b,X,i,j)
% i longueur de X
% j longueur de Y
if i==0 || j==0
    
end
if b(i,j)=='?'
    Imprimer_PLSC(b,X,i-1,j-1);
    %imprimer X(i)
elseif b(i,j)=='?'
    Imprimer_PLSC(b,X,i-1,j);
else
    Imprimer_PLSC(b,X,i,j-1);
end
end

